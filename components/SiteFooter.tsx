import Image from 'next/image';

const logoPath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/cyfrosec-mark.png`;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <Image src={logoPath} alt="" width={32} height={32} aria-hidden="true" />
            <span>CyfroSec</span>
          </a>
          <p>Understand your environment better than an attacker ever could.</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-links">
          <div>
            <strong>Explore</strong>
            <a href="#platform">Platform</a>
            <a href="#solutions">Solutions</a>
            <a href="#teams">Who it helps</a>
            <a href="https://www.cyfrosec.com/documents/">Documentation</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href="https://www.cyfrosec.com/about/">About</a>
            <a href="https://www.cyfrosec.com/contact/">Contact</a>
            <a href="https://www.cyfrosec.com/book-demo/">Book a demo</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="https://www.cyfrosec.com/privacy/">Privacy policy</a>
            <a href="https://www.cyfrosec.com/terms/">Terms of service</a>
            <a href="https://www.cyfrosec.com/cookies/">Cookie policy</a>
          </div>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>
          Cyfrosec Prosta Spółka Akcyjna · Ul. Józefa Marcika 6, 30-443 Kraków, Poland · KRS:
          0001250469 · NIP: 6793369771 · Share capital: PLN 100.00 · Registration court: Sąd
          Rejonowy dla Krakowa-Śródmieścia w Krakowie
        </p>
        <p>© 2026 CyfroSec. All rights reserved.</p>
      </div>
    </footer>
  );
}
