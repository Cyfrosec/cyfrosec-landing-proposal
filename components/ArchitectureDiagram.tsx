'use client';

import { useEffect, useRef, useState } from 'react';
import { architecture } from '@/components/content';

type Edge = { from: string; to: string };

const edges: Edge[] = [
  { from: 'infra', to: 'agent' },
  { from: 'network', to: 'agent' },
  { from: 'code', to: 'ingest' },
  { from: 'agent', to: 'ingest' },
  { from: 'ingest', to: 'engine' },
  ...architecture.outputs.map((node) => ({ from: 'engine', to: node.id })),
];

type Path = { d: string; key: string; end: [number, number] };

export function ArchitectureDiagram() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<Path[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const measure = () => {
      const box = root.getBoundingClientRect();
      const rect = (id: string) =>
        root.querySelector<HTMLElement>(`[data-node="${id}"]`)?.getBoundingClientRect();
      const next: Path[] = [];

      for (const edge of edges) {
        const a = rect(edge.from);
        const b = rect(edge.to);
        if (!a || !b) continue;
        const sideBySide = b.left > a.right;
        if (sideBySide) {
          const x1 = a.right - box.left;
          const y1 = a.top + a.height / 2 - box.top;
          const x2 = b.left - box.left - 6;
          const y2 = b.top + b.height / 2 - box.top;
          const bend = (x2 - x1) / 2;
          next.push({
            key: `${edge.from}-${edge.to}`,
            d: `M${x1} ${y1} C${x1 + bend} ${y1} ${x2 - bend} ${y2} ${x2} ${y2}`,
            end: [x2, y2],
          });
        } else if (b.top > a.bottom) {
          const x = a.left + a.width / 2 - box.left;
          const y1 = a.bottom - box.top;
          const y2 = b.top - box.top - 6;
          next.push({ key: `${edge.from}-${edge.to}`, d: `M${x} ${y1} L${x} ${y2}`, end: [x, y2] });
        }
      }
      setSize({ w: box.width, h: box.height });
      setPaths(next);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const groups = [architecture.sources, architecture.processing, architecture.outputs];

  return (
    <div className="arch" ref={rootRef}>
      <svg
        className="arch-lines"
        width={size.w}
        height={size.h}
        viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
        aria-hidden="true"
      >
        {paths.map((path) => (
          <g key={path.key}>
            <path className="arch-line" d={path.d} />
            <path className="arch-pulse" d={path.d} />
            <circle className="arch-port" cx={path.end[0]} cy={path.end[1]} r={2.5} />
          </g>
        ))}
      </svg>

      {architecture.columns.map((column, index) => (
        <div className="arch-col" key={column.stage}>
          <div className="arch-head">
            <p className="arch-stage">{column.stage}</p>
            <h3>{column.outcome}</h3>
            <p>{column.body}</p>
          </div>
          <ul className="arch-nodes">
            {groups[index].map((node) => (
              <li
                key={node.id}
                data-node={node.id}
                className={node.id === 'engine' ? 'arch-node is-engine' : 'arch-node'}
              >
                <strong>{node.title}</strong>
                <span>{node.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
