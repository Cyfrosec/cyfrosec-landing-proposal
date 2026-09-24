'use client';

import { useState } from 'react';
import { BrainCircuit, Check, Copy, MessageSquareText, ShieldCheck, Terminal } from 'lucide-react';
import { engineFeatures } from '@/components/content';

type FeatureId = (typeof engineFeatures)[number]['id'];

const commands = {
  'Debian / Ubuntu': 'sudo apt-get update && sudo apt-get install --only-upgrade openssh-server',
  'RHEL / Fedora': 'sudo dnf upgrade openssh-server',
  SUSE: 'sudo zypper update openssh',
} as const;

type Distro = keyof typeof commands;

export function FindingExplainer() {
  const [active, setActive] = useState<FeatureId | null>(null);
  const [distro, setDistro] = useState<Distro>('Debian / Ubuntu');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(commands[distro]);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="explainer"
      data-active={active ?? undefined}
      onMouseLeave={() => setActive(null)}
    >
      <ul className="explainer-features" aria-label="What the CyfroAI Engine adds to a finding">
        {engineFeatures.map((feature) => (
          <li key={feature.id}>
            <button
              type="button"
              aria-pressed={active === feature.id}
              onMouseEnter={() => setActive(feature.id)}
              onFocus={() => setActive(feature.id)}
              onClick={() => setActive(active === feature.id ? null : feature.id)}
            >
              <span className="explainer-title">{feature.title}</span>
              <span className="explainer-body">{feature.body}</span>
            </button>
          </li>
        ))}
      </ul>

      <figure className="finding">
        <div className="finding-card">
          <header className="finding-head" data-region="explain">
            <span className="finding-rank" aria-label="Priority 1">
              1
            </span>
            <div>
              <div className="finding-badges">
                <span className="badge badge-high">Base: High</span>
                <span className="badge badge-risk">Risk: High</span>
                <span className="badge badge-muted">Reachable</span>
                <span className="badge badge-muted">Exposed</span>
              </div>
              <p className="finding-id">CVE-2024-6387</p>
              <p className="finding-name">
                OpenSSH sshd signal handler race condition (“regreSSHion”)
              </p>
            </div>
          </header>

          <dl className="finding-metrics" data-region="context">
            <div>
              <dt>Target</dt>
              <dd className="mono">10.211.55.2</dd>
            </div>
            <div>
              <dt>Package</dt>
              <dd className="mono">OpenSSH 9.6p1</dd>
            </div>
            <div>
              <dt>CVSS</dt>
              <dd className="mono">8.1</dd>
            </div>
            <div className="finding-reach">
              <dt>Reachability</dt>
              <dd>
                <span className="reach-bar" aria-hidden="true">
                  <span style={{ width: '98%' }} />
                </span>
                <span className="mono">98%</span>
              </dd>
            </div>
          </dl>

          <div className="finding-panels">
            <section className="finding-panel" data-region="explain">
              <h4>
                <BrainCircuit size={15} aria-hidden="true" /> Reasoning and context
              </h4>
              <p>
                A race condition in sshd’s signal handling can let an unauthenticated attacker run
                code as root on glibc-based Linux. OpenSSH 9.6p1 is inside the affected range
                (8.5p1–9.7p1), and the port scan confirms SSH on 22/tcp is exposed and reachable
                with 98% confidence.
              </p>
            </section>
            <section className="finding-panel is-action" data-region="remediate">
              <h4>
                <ShieldCheck size={15} aria-hidden="true" /> Recommended action
              </h4>
              <p>
                Upgrade OpenSSH to 9.8p1 or later in the current change window, then re-run the
                assessment to confirm. If you can’t patch yet, set <code>LoginGraceTime 0</code> in
                sshd_config as a temporary mitigation.
              </p>
            </section>
          </div>

          <div className="finding-evidence" data-region="context">
            <p className="finding-label">Correlation evidence</p>
            <pre className="mono">
              {`open tcp/22 ssh on 10.211.55.2\nbanner SSH-2.0-OpenSSH_9.6p1`}
            </pre>
          </div>

          <div className="finding-commands" data-region="remediate">
            <div className="commands-head">
              <p className="finding-label">
                <Terminal size={14} aria-hidden="true" /> Remediation commands
              </p>
              <div className="commands-tabs" role="tablist" aria-label="Operating system">
                {(Object.keys(commands) as Distro[]).map((name) => (
                  <button
                    key={name}
                    type="button"
                    role="tab"
                    aria-selected={distro === name}
                    onClick={() => setDistro(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
            <div className="commands-body" role="tabpanel">
              <code className="mono">{commands[distro]}</code>
              <button
                type="button"
                className="copy-button"
                onClick={copy}
                aria-label="Copy command"
              >
                {copied ? (
                  <Check size={14} aria-hidden="true" />
                ) : (
                  <Copy size={14} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <div className="finding-ask" data-region="assistant">
            <MessageSquareText size={15} aria-hidden="true" />
            <span>Ask CyfroAssistant about this finding</span>
            <span className="ask-chip">Which other hosts run this version?</span>
          </div>
        </div>
        <figcaption>
          Example finding in the CyfroSec findings view. CVE details from the public NVD record.
        </figcaption>
      </figure>
    </div>
  );
}
