import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CyfroSec | From discovery to decisive action',
  description:
    'CyfroSec connects code, asset, and network discovery with AI-driven prioritization and guided remediation.',
  openGraph: {
    title: 'CyfroSec | From discovery to decisive action',
    description: 'Understand your exposure across code and infrastructure.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
