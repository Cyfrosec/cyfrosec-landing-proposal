import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Schibsted_Grotesk } from 'next/font/google';
import './globals.css';

const sans = Schibsted_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const title = 'CyfroSec | Understand your environment better than an attacker ever could';
const description =
  'CyfroSec brings code security, asset and network discovery, service fingerprinting and compliance checks together, with AI that prioritizes real risk and explains the fix.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website', siteName: 'CyfroSec' },
};

export const viewport: Viewport = {
  themeColor: '#0a1624',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
