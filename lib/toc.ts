export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

function makeId(text: string): string {
  return text
    .toLowerCase()
    .replace(/&amp;/g, 'and')
    .replace(/&[^;]+;/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
}

export function extractHeadings(html: string): TOCItem[] {
  const items: TOCItem[] = [];

  // [\s\S]*? matches across newlines
  const headingRegex = /<(h[23])\b[^>]*>([\s\S]*?)<\/h[23]>/gi;
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1].replace('h', ''));
    const title = match[2]
      .replace(/<[^>]+>/g, '')   // strip inner tags
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#038;/g, '&')
      .trim();

    if (!title) continue;

    const id = makeId(title);
    if (!id) continue;

    items.push({ id, title, level });
  }

  return items;
}

export function injectHeadingIds(html: string): string {
  // Directly replace h2/h3 tags — add id if not already present
  return html.replace(/<(h[23])(\b[^>]*)>([\s\S]*?)<\/h[23]>/gi, (match, tag, attrs, content) => {
    if (/\bid=/.test(attrs)) return match; // already has id

    const plainText = content
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&#038;/g, '&')
      .replace(/&#8217;/g, "'")
      .trim();

    const id = makeId(plainText);
    if (!id) return match;

    return `<${tag}${attrs} id="${id}">${content}</${tag}>`;
  });
}