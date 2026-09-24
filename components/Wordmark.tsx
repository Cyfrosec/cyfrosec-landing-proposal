import Image from 'next/image';
import { asset } from '@/components/content';

const sources = {
  white: '/brand/cyfrosec-wordmark-white.png',
  brand: '/brand/cyfrosec-wordmark.png',
} as const;

export function Wordmark({ tone = 'brand' }: { tone?: keyof typeof sources }) {
  return (
    <Image
      className="wordmark"
      src={asset(sources[tone])}
      alt="CyfroSec"
      width={960}
      height={175}
      priority
    />
  );
}
