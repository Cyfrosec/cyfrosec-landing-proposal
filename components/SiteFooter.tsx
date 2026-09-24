import { Wordmark } from '@/components/Wordmark';
import { footerNav, legalEntity, links } from '@/components/content';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Wordmark tone="white" />
          <p>Understand your environment better than an attacker ever could.</p>
          <a className="footer-mail" href="mailto:contact@cyfrosec.com">
            contact@cyfrosec.com
          </a>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {footerNav.map((group) => (
            <div key={group.title}>
              <p>{group.title}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="container footer-legal">
        <p>{legalEntity}</p>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 CyfroSec. All rights reserved.</p>
        <ul>
          <li>
            <a href={links.privacy}>Privacy policy</a>
          </li>
          <li>
            <a href={links.terms}>Terms of service</a>
          </li>
          <li>
            <a href={links.cookies}>Cookie policy</a>
          </li>
          <li className="footer-eu">Made in the EU</li>
        </ul>
      </div>
    </footer>
  );
}
