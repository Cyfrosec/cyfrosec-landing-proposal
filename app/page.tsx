import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { SiteHeader } from '@/components/SiteHeader';
import { HeroFlow } from '@/components/HeroFlow';
import { ProductPreview } from '@/components/ProductPreview';
import { SiteFooter } from '@/components/SiteFooter';
import { audiences, capabilities, faqs, painPoints, trustPoints } from '@/components/content';

const demoUrl = 'https://www.cyfrosec.com/book-demo/';

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="eyebrow-line" /> CYFROSEC PLATFORM{' '}
                <span className="eyebrow-slash">/</span> CODE TO CLOUD
              </span>
              <h1 id="hero-title">
                From discovery to <em>decisive action.</em>
              </h1>
              <p>
                Understand your exposure across code and infrastructure. Know what matters, why it
                matters, and where to act first.
              </p>
              <div className="hero-actions">
                <a className="button" href={demoUrl}>
                  Book a demo <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-outline" href="#platform">
                  See the platform <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <HeroFlow />
          </div>
        </section>

        <section className="mission-band" aria-labelledby="mission-title">
          <div className="container mission-grid">
            <div>
              <span className="eyebrow">OUR MISSION</span>
              <h2 id="mission-title">
                Make AI-driven security <span>simple, actionable, and accessible.</span>
              </h2>
              <p>So every team can focus on what truly matters.</p>
            </div>
            <div>
              <span className="eyebrow">OUR VISION</span>
              <h2>
                One unified security platform <span>from code to cloud.</span>
              </h2>
              <p>Clear visibility from development to deployment and beyond.</p>
            </div>
          </div>
        </section>

        <section id="why" className="section" aria-labelledby="why-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">THE PROBLEM WE SOLVE</span>
                <h2 id="why-title">
                  Security data is everywhere.
                  <br />
                  <span>Decisions should be clear.</span>
                </h2>
              </div>
              <p>
                Disconnected tools create blind spots and noisy backlogs. CyfroSec brings signals
                together so teams can understand exposure and move with confidence.
              </p>
            </div>
            <div className="pain-grid">
              {painPoints.map((point) => (
                <article className="pain-item" key={point.number}>
                  <span className="item-number">{point.number}</span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="platform"
          className="section platform-section"
          aria-labelledby="platform-title"
        >
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">ONE CONNECTED PLATFORM</span>
              <h2 id="platform-title">
                See the risk. Understand the priority. <span>Take action.</span>
              </h2>
              <p>Discovery, context, and guidance in a single flow.</p>
            </div>
            <ProductPreview />
            <div className="steps">
              <div>
                <span>01 / DISCOVER</span>
                <h3>See what is exposed.</h3>
                <p>
                  Bring code-security findings, assets, services, and network signals into view.
                </p>
              </div>
              <div>
                <span>02 / PRIORITIZE</span>
                <h3>Focus on real risk.</h3>
                <p>
                  CyfroAI relates findings to exposure and asset context so teams can decide what
                  needs attention.
                </p>
              </div>
              <div>
                <span>03 / REMEDIATE</span>
                <h3>Move toward the fix.</h3>
                <p>Give engineers practical guidance and leaders a clearer picture of progress.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section" aria-labelledby="solutions-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">PURPOSE-BUILT CAPABILITIES</span>
                <h2 id="solutions-title">
                  Every layer has a role.
                  <br />
                  <span>Every signal has context.</span>
                </h2>
              </div>
              <p>
                From collection and code analysis to insight and guided response, each part of
                CyfroSec contributes to a connected view.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => (
                <a href={item.href} className="capability" key={item.number}>
                  <span className="capability-top">
                    {item.number} / {item.tag}
                  </span>
                  <div className="capability-content">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <ArrowRight size={22} aria-hidden="true" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="teams" className="section teams-section" aria-labelledby="teams-title">
          <div className="container teams-layout">
            <div className="teams-lead">
              <span className="eyebrow">BUILT FOR EVERY DECISION</span>
              <h2 id="teams-title">
                One view.
                <br />
                <span>The right depth for every team.</span>
              </h2>
              <p>
                Turn technical evidence into shared understanding without losing the detail
                engineers need.
              </p>
              <a className="text-link" href="https://www.cyfrosec.com/solutions/">
                Explore solutions <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="audience-list">
              {audiences.map((item) => (
                <div key={item.number}>
                  <span className="item-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <ChevronRight size={19} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="section trust-section" aria-labelledby="trust-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">CONTROL & DEPLOYMENT</span>
                <h2 id="trust-title">
                  A platform that fits <span>your environment.</span>
                </h2>
              </div>
              <p>
                Visibility is useful when the right teams can act on it with the right controls.
                CyfroSec supports different deployment needs and accountable access.
              </p>
            </div>
            <div className="trust-grid">
              {trustPoints.map((item) => (
                <div className="trust-item" key={item.title}>
                  <span className="trust-check">
                    <Check size={18} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <a className="text-link trust-link" href="https://www.cyfrosec.com/products/overview/">
              Explore the platform <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="faq" className="section faq-section" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <div>
              <span className="eyebrow">COMMON QUESTIONS</span>
              <h2 id="faq-title">
                A clearer picture <span>starts here.</span>
              </h2>
              <p>
                Learn how CyfroSec connects your security signals and supports the next decision.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="cta-title">
          <div className="container cta-layout">
            <div>
              <span className="eyebrow">READY TO SEE WHAT MATTERS?</span>
              <h2 id="cta-title">See CyfroSec in action.</h2>
              <p>
                Walk through the platform with our team and explore how it can fit your environment.
              </p>
            </div>
            <a className="button" href={demoUrl}>
              Book a demo <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
