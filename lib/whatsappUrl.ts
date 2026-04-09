/**
 * Build WhatsApp chat URLs using api.whatsapp.com (HTTP 200 for crawlers).
 * wa.me often returns 429 to SEO bots, which tools report as broken external links.
 */
export function whatsappSendUrl(phone: string, text?: string): string {
  const digits = phone.replace(/\D/g, '')
  const u = new URL('https://api.whatsapp.com/send')
  u.searchParams.set('phone', digits)
  if (text) u.searchParams.set('text', text)
  return u.toString()
}
