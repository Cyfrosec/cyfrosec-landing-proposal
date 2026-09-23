import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const nav = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Who it helps', href: '#teams' },
  { label: 'Trust', href: '#trust' },
];

const logoPath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/cyfrosec-mark.png`;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="CyfroSec home">
          <Image src={logoPath} alt="" width={34} height={34} aria-hidden="true" />
          <span>CyfroSec</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="https://www.cyfrosec.com/documents/">Documentation</a>
        </nav>
        <a className="button button-small header-cta" href="https://www.cyfrosec.com/book-demo/">
          Book a demo <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {nav.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="https://www.cyfrosec.com/documents/">Documentation</a>
            <a href="https://www.cyfrosec.com/book-demo/">Book a demo</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
