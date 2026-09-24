'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Wordmark } from '@/components/Wordmark';
import { links, primaryNav, type NavGroup, type NavLink } from '@/components/content';

const isGroup = (item: NavGroup | NavLink): item is NavGroup => 'items' in item;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const lastPointer = useRef('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const openOnHover = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeOnLeave = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  };
  // A mouse has already opened the menu on hover, so its click should not close it again.
  // Keyboard and touch toggle.
  const onTriggerClick = (label: string) => {
    if (lastPointer.current === 'mouse') setOpenMenu(label);
    else setOpenMenu((open) => (open === label ? null : label));
    lastPointer.current = '';
  };

  return (
    <header className={`site-header${scrolled || mobileOpen ? ' is-solid' : ''}`}>
      <div className="container header-bar">
        <a className="header-brand" href="#top" aria-label="CyfroSec home">
          <Wordmark tone="white" />
        </a>

        <nav className="header-nav" aria-label="Primary" ref={navRef}>
          <ul>
            {primaryNav.map((item) =>
              isGroup(item) ? (
                <li
                  key={item.label}
                  className="nav-group"
                  onPointerEnter={(e) => e.pointerType === 'mouse' && openOnHover(item.label)}
                  onPointerLeave={(e) => e.pointerType === 'mouse' && closeOnLeave()}
                >
                  <button
                    type="button"
                    className="nav-trigger"
                    aria-expanded={openMenu === item.label}
                    aria-controls={`menu-${item.label}`}
                    onPointerDown={(e) => {
                      lastPointer.current = e.pointerType;
                    }}
                    onClick={() => onTriggerClick(item.label)}
                  >
                    {item.label}
                    <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
                  </button>
                  <div
                    id={`menu-${item.label}`}
                    className="nav-menu"
                    data-open={openMenu === item.label}
                    data-wide={item.items.length > 4}
                  >
                    <ul>
                      {item.items.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} onClick={() => setOpenMenu(null)}>
                            <span className="nav-menu-label">{link.label}</span>
                            <span className="nav-menu-desc">{link.description}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <a className="nav-trigger" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="header-signin" href={links.signIn}>
            Sign in
          </a>
          <a className="button button-light button-small" href={links.demo}>
            Book a demo
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-open={mobileOpen} hidden={!mobileOpen}>
        <div className="container">
          {primaryNav.map((item) =>
            isGroup(item) ? (
              <div className="mobile-group" key={item.label}>
                <p>{item.label}</p>
                <ul>
                  {item.items.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} onClick={() => setMobileOpen(false)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a
                className="mobile-single"
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ),
          )}
          <div className="mobile-actions">
            <a className="button button-light" href={links.demo}>
              Book a demo <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button button-ghost-dark" href={links.signIn}>
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
