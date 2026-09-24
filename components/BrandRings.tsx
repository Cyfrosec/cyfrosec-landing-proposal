// Line drawing that echoes the rings and segments of the CyfroSec mark.
// Used as a quiet background motif, never as a stand-in for the logo.

const arc = (r: number, from: number, to: number) => {
  const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;
  const [x1, y1] = [200 + r * Math.cos(rad(from)), 200 + r * Math.sin(rad(from))];
  const [x2, y2] = [200 + r * Math.cos(rad(to)), 200 + r * Math.sin(rad(to))];
  return `M${x1.toFixed(2)} ${y1.toFixed(2)} A${r} ${r} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
};

export function BrandRings({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <circle cx="200" cy="200" r="198" />
      <circle cx="200" cy="200" r="160" />
      <circle cx="200" cy="200" r="72" />
      <circle cx="200" cy="200" r="46" />
      <path d={arc(178, -48, 48)} />
      <path d={arc(178, 132, 228)} />
      <path className="ring-bold" d={arc(128, -40, -6)} />
      <path className="ring-bold" d={arc(128, 6, 40)} />
      <path className="ring-bold" d={arc(128, 140, 174)} />
      <path className="ring-bold" d={arc(128, 186, 220)} />
      <path d={arc(104, 60, 120)} />
      <path d={arc(104, 240, 300)} />
      <path d="M2 200 H86 M314 200 H398 M200 2 V52 M200 348 V398" />
    </svg>
  );
}
