export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  stack: string[]
  highlights: string[]
  timeline: string
  liveUrl?: string
  githubUrl?: string
  type: 'ai' | 'saas' | 'platform'
}

export const projects: Project[] = [
  {
    id: 'edtech',
    name: 'EdTech Learning Platform',
    tagline: 'Client platform — building and maintaining since March 2020',
    description:
      'A multi-age coding education platform (100K+ users) with an AI-powered lesson builder, a custom in-browser IDE, and block-based visual programming for younger learners. AI capability was added incrementally onto a mature Laravel/Vue codebase — not built AI-first.',
    stack: ['Laravel', 'Vue 3', 'MySQL', 'Claude SDK', 'WebSockets', 'Tailwind'],
    highlights: [
      '100K+ users across 3 age-grouped curricula',
      'AI lesson builder — 12 interactive block types',
      'Custom online code editor (IDE) + block-based visual programming',
      'Student, instructor, and parent dashboards',
      'Formal QA discipline — test plans, evidence capture, bug triage',
    ],
    timeline: 'In production since March 2020',
    type: 'platform',
  },
  {
    id: 'aadhaar',
    name: 'Aadhaar Identity Verification Platform',
    tagline: 'Client platform — GovTech / RegTech, built end-to-end',
    description:
      'Sole engineer delivering the full stack (backend, mobile app, frontend) for a client UIDAI-registered as an Offline Verification Seeking Entity. Compliant with the Aadhaar Act 2016 and DPDPA 2023.',
    stack: ['Laravel', 'Vue 3', 'Flutter', 'PostgreSQL'],
    highlights: [
      '1M+ verifications processed last quarter, scaling toward 10M/quarter',
      'Serving 200+ verification centers',
      'Encrypted selective-disclosure verification, immutable audit/consent trail',
      'Multi-panel platform (org admin, verification center, supervisor) + mobile verifier app',
      'Built solo — backend, mobile app, and frontend',
    ],
    timeline: 'Current — production',
    type: 'platform',
  },
  {
    id: 'cortexai',
    name: 'cortexai',
    tagline: "Askasia's Agent Orchestration Platform — own system",
    description:
      "Designed and operate the AI agent-orchestration platform that runs Askasia's own business end-to-end — billing, CRM pipeline, prospecting, and content publishing all handled by a coordinated fleet of specialist agents.",
    stack: ['Python', 'FastAPI', 'Vue 3', 'PostgreSQL', 'Claude SDK', 'MCP', 'WebSockets'],
    highlights: [
      '29 specialist agents, each scoped to least-privilege tool access',
      '77 automation skills, 24 MCP tool integrations',
      'Task board + artifact store + run log in central Postgres — atomic task_claim, no double-work',
      'Provider-agnostic LLM layer — swap providers via env var, zero code changes',
      'Runs real monthly billing, invoicing, CRM, prospecting, and publishing in production',
    ],
    timeline: 'Ongoing — current',
    liveUrl: 'https://askasia.in',
    type: 'ai',
  },
]

export const stats = [
  { value: '10+', label: 'Years shipping production software' },
  { value: '100K+', label: 'Users on the EdTech platform' },
  { value: '1M+', label: 'Aadhaar verifications last quarter' },
  { value: '29', label: 'Agents orchestrated by cortexai' },
]

export const skills = [
  { category: 'Backend', items: ['Laravel', 'FastAPI', 'Python', 'Node.js', 'REST API design', 'PostgreSQL', 'MySQL', 'Redis'] },
  { category: 'Frontend', items: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'Pinia'] },
  { category: 'AI / Agentic', items: ['Claude SDK', 'ChatGPT', 'MCP / multi-agent orchestration', 'Prompt engineering', 'RAG pipelines'] },
  { category: 'Testing', items: ['PHPUnit', 'Pytest', 'Vitest', 'Cypress', 'Playwright'] },
  { category: 'Infrastructure', items: ['DigitalOcean', 'Docker', 'Nginx', 'On-premises infra', 'Git', 'CI/CD'] },
]
