import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  Globe2,
  ScrollText,
  Server,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ExploitChart } from '@/components/ExploitChart';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { FindingExplainer } from '@/components/FindingExplainer';
import { AudienceViews } from '@/components/AudienceViews';
import { BrandRings } from '@/components/BrandRings';
import { HeroRadar } from '@/components/HeroRadar';
import { approach, asset, faqs, hero, links, problems, securityPoints } from '@/components/content';

const securityIcons = {
  compliance: ShieldCheck,
  residency: Globe2,
  rbac: UsersRound,
  audit: ScrollText,
  onprem: Server,
  sources: Database,
} as const;

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="kicker kicker-dark">{hero.kicker}</p>
                <h1 id="hero-title">{hero.title}</h1>
                <p className="hero-lede">{hero.lede}</p>
                <div className="hero-actions">
                  <a className="button button-light" href={links.demo}>
                    Book a demo <ArrowRight size={16} aria-hidden="true" />
                  </a>
                  <a className="button button-ghost-dark" href={links.contact}>
                    Contact sales
                  </a>
                </div>
              </div>
              <HeroRadar />
            </div>
            <dl className="hero-facts">
              {hero.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="container hero-stage">
            <figure className="product-frame">
              <div className="product-bar">
                <span className="product-crumb">
                  CyfroSec <span aria-hidden="true">/</span> Dashboard
                </span>
                <span className="product-env">Demo environment</span>
              </div>
              <div className="product-shot">
                <Image
                  src={asset('/product/dashboard.png')}
                  alt="The CyfroSec dashboard, showing asset discovery, scan status, vulnerabilities by severity with top critical findings, AI insights and agent status."
                  width={1698}
                  height={1058}
                  priority
                />
              </div>
            </figure>
          </div>
        </section>

        {/* Problem */}
        <section id="why" className="section section-paper" aria-labelledby="why-title">
          <div className="container">
            <header className="section-head">
              <div>
                <p className="kicker">Why traditional security platforms fall behind</p>
                <h2 id="why-title">
                  Built for yesterday’s infrastructure, not today’s AI‑driven threats.
                </h2>
              </div>
              <p className="section-intro">
                Most tools secure code, cloud, endpoints and infrastructure in silos. The result is
                noise, blind spots and unclear priorities, and the findings that matter get lost
                among the ones that don’t.
              </p>
            </header>

            <figure className="exploit">
              <div className="exploit-numbers">
                <div>
                  <span className="exploit-value">23,667</span>
                  <span className="exploit-label">CVEs published in the first half of 2025</span>
                </div>
                <div>
                  <span className="exploit-value is-signal">161</span>
                  <span className="exploit-label">
                    were exploited in the wild. Most of the others were treated with the same
                    urgency.
                  </span>
                </div>
              </div>
              <ExploitChart />
              <figcaption>
                <span className="legend">
                  <span className="legend-item">
                    <i className="legend-cve" aria-hidden="true" /> One CVE
                  </span>
                  <span className="legend-item">
                    <i className="legend-exploited" aria-hidden="true" /> Exploited
                  </span>
                </span>
                <span>
                  Source:{' '}
                  <a href={links.cveSource} target="_blank" rel="noreferrer">
                    Recorded Future, H1 2025 Malware and Vulnerability Trends
                  </a>
                </span>
              </figcaption>
            </figure>

            <ul className="problems">
              {problems.map((problem) => (
                <li key={problem.label}>
                  <p className="problem-label">{problem.label}</p>
                  <h3>{problem.title}</h3>
                  <p>{problem.body}</p>
                  <a className="text-link" href={problem.link.href}>
                    {problem.link.label} <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Approach */}
        <section className="section section-white approach" aria-labelledby="approach-title">
          <div className="container">
            <div className="approach-grid">
              <p className="kicker" id="approach-title">
                Our approach
              </p>
              <figure className="mission">
                <blockquote>
                  <p>{approach.mission}</p>
                </blockquote>
                <figcaption>The CyfroSec mission</figcaption>
              </figure>
              <div className="approach-body">
                <p>{approach.body}</p>
                <a className="text-link" href={links.about}>
                  About CyfroSec <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
            <ul className="pillars">
              {approach.pillars.map((pillar) => (
                <li key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="section section-dark" aria-labelledby="platform-title">
          <div className="container">
            <header className="section-head">
              <div>
                <p className="kicker kicker-dark">Vulnerability assessment as a service</p>
                <h2 id="platform-title">One platform. Every layer.</h2>
              </div>
              <p className="section-intro">
                Stop stitching together fragmented tools. CyfroAgent and CyfroCode collect data from
                across your environment, the CyfroAI Engine analyzes it, and CyfroAI Insights turns
                it into guidance your team can act on.
              </p>
            </header>
            <ArchitectureDiagram />
          </div>
        </section>

        {/* Engine */}
        <section id="engine" className="section section-paper" aria-labelledby="engine-title">
          <div className="container">
            <header className="section-head">
              <div>
                <p className="kicker">CyfroAI Engine</p>
                <h2 id="engine-title">Know why it matters, what to fix first, and exactly how.</h2>
              </div>
              <p className="section-intro">
                The CyfroAI Engine doesn’t stop at detection. Every finding comes with the context,
                reasoning and remediation steps your team needs to act on it.
              </p>
            </header>
            <FindingExplainer />
          </div>
        </section>

        {/* Teams */}
        <section id="teams" className="section section-white" aria-labelledby="teams-title">
          <div className="container">
            <header className="section-head">
              <div>
                <p className="kicker">Who CyfroSec is for</p>
                <h2 id="teams-title">
                  Built for the people who manage infrastructure, not just the security team.
                </h2>
              </div>
              <p className="section-intro">
                Leaders get high-level insights. Security teams get the technical detail they need
                to act. Everyone works from the same findings.
              </p>
            </header>
            <AudienceViews />
          </div>
        </section>

        {/* Security */}
        <section id="security" className="section section-dark" aria-labelledby="security-title">
          <div className="container security-grid">
            <div className="security-lead">
              <p className="kicker kicker-dark">Security and CyfroCompliance</p>
              <h2 id="security-title">Built on security‑first principles.</h2>
              <p className="section-intro">
                CyfroSec protects your infrastructure and keeps it up to date, with deployment and
                data residency options that fit your governance.
              </p>
              <div className="eu-note">
                <span className="eu-stars" aria-hidden="true">
                  {Array.from({ length: 12 }, (_, i) => (
                    <i key={i} style={{ transform: `rotate(${i * 30}deg) translateY(-11px)` }} />
                  ))}
                </span>
                <p>
                  <strong>Made in the EU.</strong> Developed by Cyfrosec P.S.A. in Kraków, Poland.
                </p>
              </div>
            </div>
            <ul className="security-list">
              {securityPoints.map((point) => {
                const Icon = securityIcons[point.icon];
                return (
                  <li key={point.title}>
                    <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-paper" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div>
              <p className="kicker">Questions</p>
              <h2 id="faq-title">What teams ask us first.</h2>
              <p className="section-intro">
                Can’t find your answer? Read the{' '}
                <a className="inline-link" href={links.docs}>
                  documentation
                </a>{' '}
                or{' '}
                <a className="inline-link" href={links.contact}>
                  talk to our team
                </a>
                .
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>
                    <span>{item.question}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="cta" aria-labelledby="cta-title">
          <BrandRings className="cta-rings" />
          <div className="container cta-inner">
            <h2 id="cta-title">
              Secure everything from code to cloud.
              <span>From exposure discovery to remediation.</span>
            </h2>
            <p>
              See CyfroSec in action with a live demo, or talk to our team about your specific
              needs.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href={links.demo}>
                Book a demo <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="button button-ghost-dark" href={links.contact}>
                Contact sales <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
