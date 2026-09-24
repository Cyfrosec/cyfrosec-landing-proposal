'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowRight, ArrowUp, BrainCircuit, Building2, Cloud, Server } from 'lucide-react';
import { audiences, links } from '@/components/content';

type AudienceId = (typeof audiences)[number]['id'];

export function AudienceViews() {
  const [active, setActive] = useState<AudienceId>('engineers');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (index + keys[event.key] + audiences.length) % audiences.length;
    setActive(audiences[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="audience">
      <div className="audience-tabs" role="tablist" aria-orientation="vertical" aria-label="Roles">
        {audiences.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            id={`tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            aria-controls={`panel-${item.id}`}
            tabIndex={active === item.id ? 0 : -1}
            onClick={() => setActive(item.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span className="audience-title">
              {item.title}
              <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="audience-body">{item.body}</span>
            <span className="audience-tag">{item.tag}</span>
          </button>
        ))}
      </div>

      <div className="audience-stage">
        {audiences.map((item) => (
          <div
            key={item.id}
            id={`panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
            hidden={active !== item.id}
            className="audience-panel"
          >
            {item.id === 'engineers' && <AssistantView />}
            {item.id === 'managers' && <SummaryView />}
            {item.id === 'security' && <FindingsView />}
            {item.id === 'leaders' && <DeploymentView />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ViewFrame({
  title,
  meta,
  caption,
  children,
}: {
  title: string;
  meta?: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="view">
      <div className="view-card">
        <div className="view-bar">
          <span>{title}</span>
          {meta && (
            <span className={meta === 'Online' ? 'view-meta is-live' : 'view-meta'}>{meta}</span>
          )}
        </div>
        {children}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function AssistantView() {
  return (
    <ViewFrame title="CyfroAssistant" meta="Online" caption="From a CyfroSec demo environment.">
      <div className="chat">
        <p className="chat-user">Analyze the latest security scan.</p>
        <div className="chat-reply">
          <p>
            <strong>Latest scan:</strong> fingerprint and asset discovery, 14 March 2026. 1,748
            vulnerabilities found.
          </p>
          <p className="chat-heading">Fix first</p>
          <ul className="chat-cves">
            <li>
              <span className="sev sev-critical">Critical</span>
              <span className="mono">CVE-2023-6879</span>
              <span>libaom3: heap-buffer-overflow on frame size change</span>
            </li>
            <li>
              <span className="sev sev-critical">Critical</span>
              <span className="mono">CVE-2025-7458</span>
              <span>libsqlite3-0: SQLite integer overflow</span>
            </li>
          </ul>
          <p className="chat-heading">Next steps</p>
          <ul className="chat-steps">
            <li>
              Fixed packages are available for some critical and high CVEs, for example OpenSSL{' '}
              <span className="mono">3.0.18-1~deb12u2</span>. Apply these first.
            </li>
            <li>Several glibc issues have no fix listed yet. Track them for upcoming patches.</li>
          </ul>
        </div>
        <div className="chat-input" aria-hidden="true">
          <span>Ask a follow-up question</span>
          <span className="chat-send">
            <ArrowUp size={14} />
          </span>
        </div>
      </div>
    </ViewFrame>
  );
}

const funnel = [
  { value: '8,320', label: 'candidates scanned', width: 100 },
  { value: '227', label: 'vulnerabilities ranked', width: 2.73 },
  { value: '15', label: 'findings drive priority', width: 0.18 },
];

function SummaryView() {
  return (
    <ViewFrame
      title="CyfroAI Insights · Executive summary"
      caption="From a CyfroSec demo environment."
    >
      <div className="summary">
        <div className="summary-text">
          <BrainCircuit size={18} aria-hidden="true" />
          <div>
            <p>
              Three critical vulnerabilities are actively exposed and need immediate remediation to
              prevent unauthorized access or system compromise.
            </p>
            <p>
              Forty-six vulnerabilities were downgraded from their base severity because of exposure
              constraints. They still warrant monitoring, but not first.
            </p>
            <p>
              Prioritize the three exposed critical vulnerabilities, followed by the exposed
              high-severity finding.
            </p>
          </div>
        </div>
        <ol className="funnel">
          {funnel.map((step) => (
            <li key={step.label}>
              <span className="funnel-value">{step.value}</span>
              <span className="funnel-label">{step.label}</span>
              <span className="funnel-bar" aria-hidden="true">
                <span style={{ width: `max(3px, ${step.width}%)` }} />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </ViewFrame>
  );
}

const severities = [
  { label: 'Critical', count: 6, tone: 'critical' },
  { label: 'High', count: 196, tone: 'high' },
  { label: 'Medium', count: 877, tone: 'medium' },
  { label: 'Low', count: 682, tone: 'low' },
  { label: 'Unknown', count: 17, tone: 'unknown' },
] as const;

const topFindings = [
  'CVE-2023-6879',
  'CVE-2025-15467',
  'CVE-2023-45853',
  'CVE-2025-7458',
  'CVE-2025-43859',
];

function FindingsView() {
  return (
    <ViewFrame title="Vulnerabilities" meta="1 target" caption="From a CyfroSec demo environment.">
      <div className="findings">
        <div className="findings-total">
          <span className="findings-count">1,778</span>
          <span>vulnerabilities by severity</span>
        </div>
        <ul className="severity-list">
          {severities.map((row) => (
            <li key={row.label}>
              <span className={`dot dot-${row.tone}`} aria-hidden="true" />
              <span className="severity-label">{row.label}</span>
              <span className="severity-bar" aria-hidden="true">
                <span
                  className={`fill-${row.tone}`}
                  style={{ width: `max(2px, ${(row.count / 877) * 100}%)` }}
                />
              </span>
              <span className="severity-count mono">{row.count}</span>
            </li>
          ))}
        </ul>
        <p className="findings-subhead">Top findings</p>
        <ul className="top-findings">
          {topFindings.map((cve) => (
            <li key={cve}>
              <span className="sev sev-critical">Critical</span>
              <span className="mono">{cve}</span>
            </li>
          ))}
        </ul>
        <div className="agent-row">
          <span className="agent-dot" aria-hidden="true" />
          <span>
            <strong>MyAgent</strong> · MainOffice
          </span>
          <span className="agent-state">Healthy</span>
        </div>
      </div>
    </ViewFrame>
  );
}

const deployments = [
  {
    Icon: Cloud,
    title: 'SaaS',
    body: 'Hosted on EU servers that meet data protection requirements.',
  },
  {
    Icon: Server,
    title: 'On-premises',
    body: 'Runs inside your own environment for maximum control.',
  },
  {
    Icon: Building2,
    title: 'Hybrid',
    body: 'Combine both to match your infrastructure and governance.',
  },
];

function DeploymentView() {
  return (
    <ViewFrame title="Deployment options">
      <div className="deploy">
        <ul>
          {deployments.map(({ Icon, title, body }) => (
            <li key={title}>
              <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="deploy-note">Flexible licensing, easy deployment and no vendor lock-in.</p>
        <a className="text-link" href={links.pricing}>
          Compare subscription tiers <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </ViewFrame>
  );
}
