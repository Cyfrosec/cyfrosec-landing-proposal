// All landing page copy lives here. Wording follows the approved copy on www.cyfrosec.com,
// tightened for length. Product examples are taken from CyfroSec demo environments.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Resolve a file in /public against the deployment base path. */
export const asset = (path: string) => `${basePath}${path}`;

/** Pages that still live on the current www.cyfrosec.com site. */
export const site = (path: string) => `https://www.cyfrosec.com${path}`;

export const links = {
  demo: site('/book-demo/'),
  contact: site('/contact/'),
  signIn: 'https://app.cyfrosec.com/dashboard',
  docs: site('/documents/'),
  pricing: site('/subscriptions/'),
  about: site('/about/'),
  overview: site('/products/overview/'),
  insights: site('/products/ai-insights/'),
  solutions: site('/solutions/'),
  cyfrocode: site('/solutions/cyfrocode/'),
  privacy: site('/privacy/'),
  terms: site('/terms/'),
  cookies: site('/cookies/'),
  cveSource: 'https://www.recordedfuture.com/research/h1-2025-malware-and-vulnerability-trends',
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; items: NavLink[] };

export const primaryNav: (NavGroup | NavLink)[] = [
  {
    label: 'Platform',
    items: [
      { label: 'Overview', href: links.overview, description: 'What CyfroSec is and how it works' },
      {
        label: 'Architecture',
        href: '#platform',
        description: 'How data moves through the platform',
      },
      {
        label: 'CyfroAI Engine',
        href: '#engine',
        description: 'AI-powered prioritization and remediation',
      },
      {
        label: 'Security & compliance',
        href: '#security',
        description: 'GDPR CyfroCompliance and data residency',
      },
    ],
  },
  {
    label: 'Solutions',
    items: [
      {
        label: 'Network Discovery',
        href: site('/solutions/network-discovery/'),
        description: 'Map your network topology',
      },
      {
        label: 'Asset Discovery',
        href: site('/solutions/asset-discovery/'),
        description: 'Find every asset in your environment',
      },
      {
        label: 'Service Fingerprinting',
        href: site('/solutions/service-fingerprinting/'),
        description: 'Identify exposed services and versions',
      },
      {
        label: 'CyfroAI Insights',
        href: site('/solutions/cyfro-ai-insights/'),
        description: 'AI-powered risk prioritization',
      },
      {
        label: 'CyfroAssistant',
        href: site('/solutions/cyfro-assistant/'),
        description: 'Conversational security guidance',
      },
      {
        label: 'CyfroCode',
        href: site('/solutions/cyfrocode/'),
        description: 'SAST code security and AI-driven patches',
      },
    ],
  },
  { label: 'Documentation', href: links.docs },
  { label: 'Pricing', href: links.pricing },
  {
    label: 'Company',
    items: [
      { label: 'About us', href: links.about, description: 'Our mission, team and approach' },
      { label: 'Contact', href: links.contact, description: 'Talk to the CyfroSec team' },
    ],
  },
];

export const hero = {
  kicker: 'AI-powered cybersecurity, from code to cloud',
  title: 'Understand your environment better than an attacker ever could.',
  lede: 'CyfroSec finds vulnerabilities before attackers exploit them. Code security, asset and network discovery, service fingerprinting and compliance checks in one platform, with AI that ranks real risk and explains the fix.',
  facts: [
    { label: 'Deployment', value: 'SaaS, on-prem or hybrid' },
    { label: 'Data residency', value: 'EU servers or your own' },
    { label: 'Compliance checks', value: 'GDPR and NIS2' },
    { label: 'Based in', value: 'Kraków, Poland' },
  ],
} as const;

export const problems = [
  {
    label: 'Alert fatigue',
    title: 'Alert fatigue without risk intelligence',
    body: 'Thousands of low-value alerts bury the critical fixes. Teams spend their time sorting noise instead of acting on the few exposures attackers can realistically exploit.',
    link: { label: 'How CyfroSec prioritizes', href: links.insights },
  },
  {
    label: 'Business context',
    title: 'Security data without business context',
    body: 'Teams chase CVSS scores, not exploitability. Routine decisions get escalated to experts who have to re-interpret what matters, and critical fixes wait.',
    link: { label: 'How CyfroAI adds context', href: links.insights },
  },
  {
    label: 'Visibility gaps',
    title: 'Fragmented visibility across code and infrastructure',
    body: 'Legacy tools cover web apps, infrastructure or code, rarely all three. Teams pivot between tools and lose sight of how a code issue becomes infrastructure risk.',
    link: { label: 'How CyfroSec connects them', href: links.solutions },
  },
  {
    label: 'AI code risk',
    title: 'AI-generated code opens new attack surfaces',
    body: 'AI-assisted development introduces new classes of flaws that older scanners miss, or can’t explain in a way developers can fix quickly.',
    link: { label: 'How CyfroCode helps', href: links.cyfrocode },
  },
] as const;

export const approach = {
  mission:
    'Make AI-driven security simple, actionable and accessible, so every team can focus on what truly matters.',
  body: 'We combine network visibility, asset discovery and deep fingerprinting with code security, across SaaS and on-prem environments, and use AI to show exactly what matters and what to fix first. We are AI researchers, software engineers and security experts building one platform from code to cloud.',
  pillars: [
    {
      title: 'Unified code-to-cloud intelligence',
      body: 'Continuous visibility from development through to production.',
    },
    {
      title: 'AI-native prioritization and remediation',
      body: 'Context-aware triage, PR-ready patches and one-click fixes.',
    },
    {
      title: 'Insight for every user',
      body: 'CyfroAssistant and CyfroAI Insights give plain-language explanations and executive summaries.',
    },
    {
      title: 'Sovereign deployment',
      body: 'SaaS, on-prem or hybrid, with built-in GDPR and NIS2 compliance checks.',
    },
  ],
} as const;

export const architecture = {
  columns: [
    {
      stage: 'Data sources',
      outcome: 'See everything',
      body: 'Code-security risks, assets, vulnerabilities, misconfigurations and secrets across AI servers, networks and infrastructure.',
    },
    {
      stage: 'Processing',
      outcome: 'Prioritize what matters',
      body: 'Risk ranked by exploitability, exposure and asset criticality, not CVSS scores alone.',
    },
    {
      stage: 'Outputs',
      outcome: 'Understand and remediate faster',
      body: 'Remediation guidance that makes sense to everyone, from executives to engineers.',
    },
  ],
  sources: [
    { id: 'infra', title: 'AI infrastructure', detail: 'Servers, workstations, containers' },
    { id: 'network', title: 'Network', detail: 'Assets, subnets, services' },
    { id: 'code', title: 'Code repositories', detail: 'SAST coverage through CyfroCode' },
  ],
  processing: [
    {
      id: 'agent',
      title: 'CyfroAgent',
      detail: 'Asset discovery, network discovery and service fingerprinting',
    },
    { id: 'ingest', title: 'Data ingestion', detail: 'Normalization and cleaning' },
    {
      id: 'engine',
      title: 'CyfroAI Engine',
      detail:
        'Correlates CVEs, misconfigurations and secrets with exploitability and asset criticality',
    },
  ],
  outputs: [
    {
      id: 'insights',
      title: 'CyfroAI Insights',
      detail: 'Explain, prioritize, correlate, remediate',
    },
    { id: 'assistant', title: 'CyfroAssistant', detail: 'Conversational AI with function calling' },
    {
      id: 'cyfrocode',
      title: 'CyfroCode',
      detail: 'SAST findings, AI explanations, approval-gated patches',
    },
    {
      id: 'compliance',
      title: 'GDPR CyfroCompliance',
      detail: 'Compliance checks on your infrastructure',
    },
    {
      id: 'reports',
      title: 'Dashboards and reports',
      detail: 'CyfroTopology diagrams and audit-ready reporting',
    },
  ],
} as const;

export const engineFeatures = [
  {
    id: 'context',
    title: 'Contextual analysis and correlation',
    body: 'Goes beyond CVE scores. Correlates exploitability, asset criticality and exposure to judge real-world risk.',
  },
  {
    id: 'explain',
    title: 'Explanations and prioritization',
    body: 'Every finding explains why it matters, what is affected and where it sits in the queue.',
  },
  {
    id: 'remediate',
    title: 'Remediation plans',
    body: 'Step-by-step guidance for your environment, including commands and configuration changes.',
  },
  {
    id: 'assistant',
    title: 'CyfroAssistant',
    body: 'Ask about your posture, scans, reports or agents in plain language and get grounded answers.',
  },
] as const;

export const audiences = [
  {
    id: 'engineers',
    title: 'Network and IT engineers',
    body: 'Clear exposure insights without needing deep security expertise, and step-by-step guidance to fix issues.',
    tag: 'Guidance you can act on',
  },
  {
    id: 'managers',
    title: 'IT managers',
    body: 'Executive summaries, compliance reports and dashboards that show your security posture at a glance.',
    tag: 'Correlation and summaries',
  },
  {
    id: 'security',
    title: 'Security teams',
    body: 'Robust agent scanning and infrastructure and network coverage, backed by the CyfroAI Engine.',
    tag: 'Technical depth',
  },
  {
    id: 'leaders',
    title: 'Decision makers',
    body: 'A cost-effective platform that scales with the business. Flexible licensing, easy deployment and no vendor lock-in.',
    tag: 'Flexible deployment',
  },
] as const;

export const securityPoints = [
  {
    icon: 'compliance',
    title: 'GDPR CyfroCompliance',
    body: 'Check that your infrastructure and its configuration meet GDPR guidelines.',
  },
  {
    icon: 'residency',
    title: 'Data residency',
    body: 'Keep data on EU servers that meet data protection requirements, or on your own premises.',
  },
  {
    icon: 'rbac',
    title: 'Role-based access control',
    body: 'Granular permissions by role, so you always know who has access to what.',
  },
  {
    icon: 'audit',
    title: 'Audit trail',
    body: 'User actions are tracked to support strict internal guidelines and compliance.',
  },
  {
    icon: 'onprem',
    title: 'On-prem deployment',
    body: 'Run CyfroSec inside your own environment for maximum control over the deployment.',
  },
  {
    icon: 'sources',
    title: 'Reputable data sources',
    body: 'Findings reference established databases such as NIST and other security data sources.',
  },
] as const;

export const faqs = [
  {
    question: 'What does CyfroSec bring together?',
    answer:
      'Code-security (SAST) findings, asset and network discovery and service fingerprinting, in one platform. CyfroAI then prioritizes the results and provides remediation guidance.',
  },
  {
    question: 'How does CyfroAI prioritize findings?',
    answer:
      'It correlates each finding with exploitability, reachability, exposure and the criticality of the affected asset, so teams can focus on real-world risk rather than raw severity scores.',
  },
  {
    question: 'Can CyfroSec run in our own environment?',
    answer:
      'Yes. CyfroSec is available as SaaS, on-premises or hybrid. Our team can help you decide which model fits your infrastructure and governance needs.',
  },
  {
    question: 'Where is our data stored?',
    answer:
      'You choose: on EU servers that meet data protection requirements, or entirely on your own premises with an on-prem deployment.',
  },
  {
    question: 'Does the platform help with remediation?',
    answer:
      'Yes. CyfroAI Insights and CyfroAssistant explain findings and give practical, step-by-step guidance. CyfroCode also supports approval-gated patches for eligible code issues.',
  },
] as const;

export const footerNav = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', href: links.overview },
      { label: 'Architecture', href: '#platform' },
      { label: 'CyfroAI Engine', href: '#engine' },
      { label: 'Security & compliance', href: '#security' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Network Discovery', href: site('/solutions/network-discovery/') },
      { label: 'Asset Discovery', href: site('/solutions/asset-discovery/') },
      { label: 'Service Fingerprinting', href: site('/solutions/service-fingerprinting/') },
      { label: 'CyfroAI Insights', href: site('/solutions/cyfro-ai-insights/') },
      { label: 'CyfroAssistant', href: site('/solutions/cyfro-assistant/') },
      { label: 'CyfroCode', href: site('/solutions/cyfrocode/') },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: links.docs },
      { label: 'Subscription tiers', href: links.pricing },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: links.about },
      { label: 'Contact', href: links.contact },
      { label: 'Book a demo', href: links.demo },
    ],
  },
] as const;

export const legalEntity =
  'Cyfrosec Prosta Spółka Akcyjna · ul. Józefa Marcika 6, 30-443 Kraków, Poland · KRS 0001250469 · NIP 6793369771 · Share capital PLN 100.00 · Registration court: Sąd Rejonowy dla Krakowa-Śródmieścia w Krakowie';
