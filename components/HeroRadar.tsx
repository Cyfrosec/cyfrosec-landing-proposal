import type { CSSProperties } from 'react';

// Hero illustration: the rings of the CyfroSec mark as three layers of an environment.
// A sweep lights up assets as it passes; orange marks exposures worth fixing first.
// Pure SVG and CSS. Each node's ping is delayed to the moment the sweep reaches its angle.

const SIZE = 540;
const C = SIZE / 2;
const SWEEP_SECONDS = 9;

const layers = [
  { label: 'Code', r: 92 },
  { label: 'Infrastructure', r: 148 },
  { label: 'Network', r: 204 },
] as const;

type Node = { layer: 0 | 1 | 2; angle: number; priority?: boolean; callout?: boolean };

// Labels sit on the 285°–345° arc, so no node is placed there.
const nodes: Node[] = [
  { layer: 0, angle: 24 },
  { layer: 0, angle: 118 },
  { layer: 0, angle: 212, priority: true },
  { layer: 0, angle: 256 },
  { layer: 1, angle: 10 },
  { layer: 1, angle: 58 },
  { layer: 1, angle: 104 },
  { layer: 1, angle: 166 },
  { layer: 1, angle: 218 },
  { layer: 1, angle: 264, priority: true },
  { layer: 2, angle: 36 },
  { layer: 2, angle: 74 },
  { layer: 2, angle: 142, priority: true, callout: true },
  { layer: 2, angle: 188 },
  { layer: 2, angle: 230 },
  { layer: 2, angle: 270 },
  { layer: 2, angle: 356 },
];

// Angles run clockwise from 12 o'clock, matching the sweep.
const point = (r: number, angle: number) => {
  const rad = (angle * Math.PI) / 180;
  return { x: C + r * Math.sin(rad), y: C - r * Math.cos(rad) };
};

const arc = (r: number, from: number, to: number) => {
  const a = point(r, from);
  const b = point(r, to);
  const large = to - from > 180 ? 1 : 0;
  return `M${a.x.toFixed(2)} ${a.y.toFixed(2)} A${r} ${r} 0 ${large} 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
};

const pct = (value: number) => `${((value / SIZE) * 100).toFixed(3)}%`;

export function HeroRadar() {
  const callout = nodes.find((node) => node.callout)!;
  const anchor = point(layers[callout.layer].r, callout.angle);

  return (
    <div
      className="radar"
      role="img"
      aria-label="Illustration: CyfroSec scans the code, infrastructure and network layers of an environment and flags the exposures to fix first."
      style={{ '--sweep': `${SWEEP_SECONDS}s` } as CSSProperties}
    >
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} fill="none" aria-hidden="true">
        <defs>
          {layers.map((layer, i) => (
            <path key={layer.label} id={`radar-label-${i}`} d={arc(layer.r + 7, 287, 347)} />
          ))}
        </defs>

        <circle className="radar-ring radar-ring-outer" cx={C} cy={C} r={250} />
        <g className="radar-segments">
          <path d={arc(232, -38, -8)} />
          <path d={arc(232, 8, 38)} />
          <path d={arc(232, 142, 172)} />
          <path d={arc(232, 188, 218)} />
        </g>
        {layers.map((layer) => (
          <circle key={layer.label} className="radar-ring" cx={C} cy={C} r={layer.r} />
        ))}
        <path
          className="radar-ticks"
          d={`M${C} 4 V32 M${C} ${SIZE - 32} V${SIZE - 4} M4 ${C} H32 M${SIZE - 32} ${C} H${SIZE - 4}`}
        />

        {layers.map((layer, i) => (
          <text key={layer.label} className="radar-label">
            <textPath href={`#radar-label-${i}`}>{layer.label.toUpperCase()}</textPath>
          </text>
        ))}

        <circle className="radar-core-ring" cx={C} cy={C} r={46} />
        <circle className="radar-core" cx={C} cy={C} r={26} />
        <circle className="radar-core-dot" cx={C} cy={C} r={6} />

        {callout && (
          <path
            className="radar-leader"
            d={`M${anchor.x.toFixed(1)} ${(anchor.y + 10).toFixed(1)} V${SIZE - 58}`}
          />
        )}

        {nodes.map((node) => {
          const { x, y } = point(layers[node.layer].r, node.angle);
          const delay = { animationDelay: `${((node.angle / 360) * SWEEP_SECONDS).toFixed(2)}s` };
          return (
            <g
              key={`${node.layer}-${node.angle}`}
              className={node.priority ? 'radar-node is-priority' : 'radar-node'}
            >
              <circle
                className="radar-ping"
                cx={x}
                cy={y}
                r={node.priority ? 14 : 10}
                style={delay}
              />
              {node.priority && <circle className="radar-pulse" cx={x} cy={y} r={9} />}
              <circle
                className="radar-dot"
                cx={x}
                cy={y}
                r={node.priority ? 5 : 3.5}
                style={delay}
              />
            </g>
          );
        })}
      </svg>

      <div className="radar-sweep" aria-hidden="true" />

      <div className="radar-callout" style={{ top: pct(SIZE - 58) }} aria-hidden="true">
        <span className="radar-callout-title">Priority 1</span>
        <span className="mono">10.211.55.2 · ssh/22</span>
        <span>Reachable and exposed</span>
      </div>

      <ul className="radar-legend" aria-hidden="true">
        <li>
          <i className="is-asset" /> Discovered asset
        </li>
        <li>
          <i className="is-priority" /> Fix first
        </li>
      </ul>
    </div>
  );
}
