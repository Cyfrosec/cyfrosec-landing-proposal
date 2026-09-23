export const painPoints = [
  {
    number: '01',
    title: 'Fragmented visibility',
    description:
      'Code, assets, and network exposures live in separate tools. The full picture is hard to see.',
  },
  {
    number: '02',
    title: 'Noise without context',
    description: 'Raw findings compete for attention without showing which exposures matter most.',
  },
  {
    number: '03',
    title: 'Slow decisions',
    description: 'Security, IT, and leadership need the same facts at different levels of detail.',
  },
] as const;

export const capabilities = [
  {
    number: '01',
    tag: 'DISCOVER',
    title: 'CyfroAgent',
    description: 'Collect asset, network, and service findings across your environment.',
    href: 'https://www.cyfrosec.com/products/cyfroagent/',
  },
  {
    number: '02',
    tag: 'SECURE CODE',
    title: 'CyfroCode',
    description: 'See code-security findings in connected repositories.',
    href: 'https://www.cyfrosec.com/solutions/cyfrocode/',
  },
  {
    number: '03',
    tag: 'PRIORITIZE',
    title: 'CyfroAI Insights',
    description: 'Turn raw findings and exposure context into clearer priorities.',
    href: 'https://www.cyfrosec.com/products/ai-insights/',
  },
  {
    number: '04',
    tag: 'UNDERSTAND',
    title: 'CyfroAssistant',
    description: 'Ask questions in plain language and get grounded guidance.',
    href: 'https://www.cyfrosec.com/products/ai-assistant/',
  },
] as const;

export const audiences = [
  {
    number: '01',
    title: 'Security teams',
    description: 'Keep technical depth while focusing on meaningful exposure.',
  },
  {
    number: '02',
    title: 'IT & network engineers',
    description: 'See affected systems and clear next steps.',
  },
  {
    number: '03',
    title: 'Decision makers',
    description: 'Understand the priorities without reading a scanner report.',
  },
] as const;

export const trustPoints = [
  {
    title: 'SaaS & on-premises',
    description: 'Choose a deployment model that fits your environment.',
  },
  {
    title: 'Role-based access',
    description: 'Give each person access appropriate to their responsibilities.',
  },
  {
    title: 'Audit trail',
    description: 'Track actions to support accountable security operations.',
  },
] as const;

export const faqs = [
  {
    question: 'What does CyfroSec bring together?',
    answer:
      'CyfroSec connects code-security findings with asset, network, and service discovery, then provides prioritized insights and remediation guidance in one platform.',
  },
  {
    question: 'How does CyfroAI prioritize findings?',
    answer:
      'CyfroAI relates findings to exposure, reachability, and affected assets to help teams focus on what needs attention beyond a raw severity score.',
  },
  {
    question: 'Can CyfroSec run in our environment?',
    answer:
      'CyfroSec offers SaaS and on-premises deployment options. The team can help assess which model fits your infrastructure and governance needs.',
  },
  {
    question: 'Does the platform help with remediation?',
    answer:
      'CyfroAI Insights and CyfroAssistant explain findings and offer practical guidance. CyfroCode also supports approval-gated patch workflows for eligible code issues.',
  },
] as const;
