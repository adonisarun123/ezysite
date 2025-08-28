'use client';

import { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

export default function TableOfContents({ content, className = '' }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const items: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
      
      // Only include h2 and h3 headings for cleaner TOC
      if (level >= 2 && level <= 3) {
        items.push({ id, title, level });
      }
    }

    setTocItems(items);
  }, [content]);

  useEffect(() => {
    // Track which heading is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -80% 0%' }
    );

    // Observe all heading elements
    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <div className={`bg-gray-50 rounded-xl p-6 sticky top-8 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <ChevronRightIcon className="w-5 h-5 text-blue-600" />
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {tocItems.map(({ id, title, level }) => (
            <li key={id}>
              <button
                onClick={() => scrollToHeading(id)}
                className={`
                  text-left w-full py-1 px-2 rounded text-sm transition-all duration-200
                  ${level === 3 ? 'ml-4' : ''}
                  ${
                    activeId === id
                      ? 'text-blue-600 bg-blue-50 font-medium'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }
                `}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
