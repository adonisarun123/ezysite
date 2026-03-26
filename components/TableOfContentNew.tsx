'use client';

import { useState, useEffect, useRef } from 'react';
import { ListBulletIcon } from '@heroicons/react/24/outline';
import { extractHeadings, TOCItem } from '@/lib/toc';

interface TableOfContentsProps {
  content: string;
  isMobile?: boolean;
  className?: string;
}

export default function TableOfContents({
  content,
  isMobile = false,
  className = '',
}: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingRef = useRef(false);
  const navRef = useRef<HTMLElement>(null);
  // ── Store refs for ALL buttons in a Map ───────────────────────────────────
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const items = extractHeadings(content);
    setTocItems(items);
    if (items.length > 0) setActiveId(items[0].id);
  }, [content]);

  // ── Scroll TOC list to keep active item visible ───────────────────────────
  useEffect(() => {
    if (!activeId || !navRef.current) return;

    const nav = navRef.current;
    const activeBtn = buttonRefs.current.get(activeId);
    if (!activeBtn) return;

    const navScrollTop = nav.scrollTop;
    const navHeight = nav.clientHeight;
    const btnTop = activeBtn.offsetTop;
    const btnHeight = activeBtn.offsetHeight;
    const btnBottom = btnTop + btnHeight;
    const visibleTop = navScrollTop;
    const visibleBottom = navScrollTop + navHeight;

    // Only scroll if button is outside the visible area
    if (btnTop < visibleTop + 16) {
      // Button is above visible area — scroll up just enough
      nav.scrollTo({ top: btnTop - 16, behavior: 'smooth' });
    } else if (btnBottom > visibleBottom - 16) {
      // Button is below visible area — scroll down just enough
      nav.scrollTo({ top: btnBottom - navHeight + 16, behavior: 'smooth' });
    }
    // If already visible — don't scroll at all ✅
  }, [activeId]);

  useEffect(() => {
    if (tocItems.length === 0) return;
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    const timer = setTimeout(() => {
      tocItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observerRef.current?.observe(el);
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [tocItems]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveId(id);
    setIsOpen(false);
    isScrollingRef.current = true;

    const navbarHeight = 80;
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollTo = elementTop - navbarHeight - 20;

    window.scrollTo({ top: scrollTo, behavior: 'smooth' });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  if (tocItems.length === 0) return null;

  const TocList = ({ navClassName = '' }: { navClassName?: string }) => (
    <nav ref={navRef} className={navClassName}>
      <ul className="space-y-0.5">
        {tocItems.map(({ id, title, level }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <button
                // ── Store ref in Map instead of single ref ─────────────────
                ref={(el) => {
                  if (el) {
                    buttonRefs.current.set(id, el);
                  } else {
                    buttonRefs.current.delete(id);
                  }
                }}
                onClick={() => scrollToHeading(id)}
                className={`
                  text-left w-full py-1.5 px-3 rounded-lg transition-all duration-150
                  ${level === 3 ? 'pl-6 text-xs' : 'text-sm font-medium'}
                  ${isActive
                    ? 'text-blue-600 bg-blue-50 border-l-2 border-blue-500'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }
                `}
              >
                {level === 3 && <span className="text-gray-400 mr-1">—</span>}
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  // ── MOBILE ─────────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className={className}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 px-4 py-3 rounded-xl"
        >
          <span className="flex items-center gap-2">
            <ListBulletIcon className="w-4 h-4" />
            Table of Contents ({tocItems.length} sections)
          </span>
          <span className={`transition-transform duration-200 text-xs ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="mt-2 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <TocList navClassName="p-4 max-h-64 overflow-y-auto" />
          </div>
        )}
      </div>
    );
  }

  // ── DESKTOP ────────────────────────────────────────────────────────────────
  return (
    <div className={`sticky ${className}`} style={{ top: '100px' }}>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-blue-50 px-5 py-4 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
            <ListBulletIcon className="w-5 h-5 text-blue-600" />
            Table of Contents
          </h3>
        </div>
        <TocList navClassName="p-4 max-h-[calc(100vh-160px)] overflow-y-auto" />
      </div>
    </div>
  );
}