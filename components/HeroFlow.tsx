import {
  ArrowDown,
  ArrowRight,
  Boxes,
  BrainCircuit,
  Code2,
  ListFilter,
  Network,
} from 'lucide-react';

const inputs = [
  { label: 'Code', detail: 'Repositories, CI/CD', Icon: Code2 },
  { label: 'Assets', detail: 'Servers, containers, services', Icon: Boxes },
  { label: 'Network', detail: 'Endpoints, services, traffic', Icon: Network },
] as const;

export function HeroFlow() {
  return (
    <div
      className="flow-shell"
      aria-label="Code, assets, and network signals flow through CyfroAI into a prioritized queue"
    >
      <div className="flow-topline">
        <span>HOW CYFROSEC WORKS</span>
        <span>01 / 03</span>
      </div>
      <div className="flow-diagram">
        <div className="flow-inputs">
          {inputs.map(({ label, detail, Icon }) => (
            <div className="flow-input" key={label}>
              <div className="flow-icon">
                <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <div>
                <strong>{label}</strong>
                <span>{detail}</span>
              </div>
              <span className="flow-port" aria-hidden="true" />
            </div>
          ))}
        </div>
        <svg
          className="flow-merge"
          viewBox="0 0 110 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 50 C52 50 58 150 110 150" />
          <path d="M0 150 L110 150" />
          <path d="M0 250 C52 250 58 150 110 150" />
        </svg>
        <div className="flow-mobile-arrow">
          <ArrowDown size={24} aria-hidden="true" />
        </div>
        <div className="flow-engine">
          <div className="flow-engine-icon">
            <BrainCircuit size={35} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div>
            <strong>CyfroAI</strong>
            <span>Correlate and prioritize</span>
          </div>
        </div>
        <div className="flow-arrow">
          <span />
          <ArrowRight size={25} aria-hidden="true" />
        </div>
        <div className="flow-mobile-arrow">
          <ArrowDown size={24} aria-hidden="true" />
        </div>
        <div className="flow-output">
          <div className="flow-output-icon">
            <ListFilter size={28} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <div>
            <strong>Prioritized queue</strong>
            <span>Focus on what matters</span>
          </div>
          <div className="flow-output-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <p className="flow-caption">Three sources. One connected view. A clearer next decision.</p>
    </div>
  );
}
