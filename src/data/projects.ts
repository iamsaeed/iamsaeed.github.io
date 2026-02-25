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
    id: 'cortexai',
    name: 'CortexAI',
    tagline: 'Autonomous Multi-Agent Orchestrator',
    description:
      'A production-grade AI orchestration platform that accepts plain English tasks, decomposes them, delegates to specialist agents, and learns over time. Dual LLM strategy: Claude Code SDK for reasoning, GPT-4o-mini for fast structured tasks.',
    stack: ['Python', 'FastAPI', 'Vue 3', 'PostgreSQL', 'Claude SDK', 'GPT-4o-mini', 'WebSockets', 'Tailwind'],
    highlights: [
      'Multi-agent task decomposition & routing',
      'WebSocket streaming chat with persistent sessions',
      'AI Studio app builder (generates full apps)',
      'Warroom: deploy/backup/health-check 19 projects',
      'Dual LLM tier: strong reasoning + cheap structured',
      'Row-Level Security multi-tenant SaaS',
    ],
    timeline: 'Ongoing — built core in weeks',
    type: 'ai',
  },
  {
    id: 'goprofiled',
    name: 'GoProfiled',
    tagline: 'Business Intelligence Platform',
    description:
      'A full-stack business directory and intelligence platform with AI-powered content pipelines, SEO-optimised listings, automated blog generation, and a complete CMS. Built for scale with a content ingestion pipeline processing thousands of listings.',
    stack: ['Laravel', 'Vue 3', 'PostgreSQL', 'AI Pipeline', 'SEO', 'Tailwind'],
    highlights: [
      'Full listings ingestion & enrichment pipeline',
      'AI-generated blog content at scale',
      'Location-aware microsites',
      'Admin CMS with bulk operations',
      'Production-deployed on DigitalOcean',
    ],
    timeline: 'Shipped core product in days',
    liveUrl: 'https://goprofiled.com',
    type: 'saas',
  },
  {
    id: 'testsherpa',
    name: 'TestSherpa',
    tagline: 'AI-Powered Testing Platform',
    description:
      'An intelligent testing platform that leverages AI to generate, run, and analyse test suites. Helps development teams ship with confidence by automating the testing lifecycle from spec generation to result analysis.',
    stack: ['Laravel', 'Vue 3', 'MySQL', 'AI Integration', 'Tailwind'],
    highlights: [
      'AI test generation from code context',
      'Automated test suite management',
      'Result analysis & reporting',
      'CI/CD pipeline integration',
    ],
    timeline: 'Production-deployed',
    liveUrl: 'https://testsherpa.ai',
    type: 'platform',
  },
  {
    id: 'codewithus',
    name: 'CodeWithUs',
    tagline: 'Interactive Coding Education Platform',
    description:
      'A full-featured coding education platform with interactive lessons, an AI-powered lesson builder, custom online code editor, and student/instructor portals. Supports Scratch, Python, JavaScript, and more across multiple age groups.',
    stack: ['Laravel', 'Vue 3', 'MySQL', 'Claude SDK', 'WebSockets', 'Tailwind'],
    highlights: [
      'AI lesson builder with 12 block types',
      'Custom online code editor (IDE)',
      'Multi-age curriculum (8-12, 12-16, 16+)',
      'Scratch & code exercise support',
      'Student + instructor portals',
    ],
    timeline: 'Production-deployed',
    type: 'platform',
  },
]

export const stats = [
  { value: '10x', label: 'Faster than traditional dev teams' },
  { value: '5+', label: 'Production SaaS apps shipped' },
  { value: '19', label: 'Projects managed via AI orchestration' },
  { value: '2wks', label: 'Average MVP delivery time' },
]

export const skills = [
  { category: 'Backend', items: ['Laravel', 'FastAPI', 'Python', 'PostgreSQL', 'MySQL', 'Redis'] },
  { category: 'Frontend', items: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'Pinia'] },
  { category: 'AI / LLM', items: ['Claude SDK', 'GPT-4o', 'Multi-agent systems', 'Prompt engineering', 'RAG pipelines'] },
  { category: 'Infrastructure', items: ['DigitalOcean', 'Docker', 'PM2', 'Nginx', 'SSH automation', 'CI/CD'] },
]
