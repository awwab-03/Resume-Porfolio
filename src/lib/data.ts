import type { LucideIcon } from 'lucide-react';
import {
  Brain,
  Server,
  Code2,
  Database,
  Cloud,
  GitBranch,
  ShieldCheck,
  Cpu,
  Terminal,
  Layers,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Site-wide constants                                                       */
/* -------------------------------------------------------------------------- */

export const SITE = {
  name: 'Muhammad Awwab Aamir',
  shortName: 'Awwab Aamir',
  role: 'Full Stack & AI Engineer',
  title: 'Muhammad Awwab Aamir — Full Stack & AI Engineer',
  description:
    'Computer Science student at FAST-NUCES building full-stack web applications, AI-powered platforms, and computer-vision systems. Experienced across React, Next.js, Node.js, and Python.',
  // Production domain (update if you add a custom domain later).
  url: 'https://resume-porfolio.vercel.app',
  location: 'Islamabad, Pakistan',
  email: 'awwab.contact@gmail.com',
  altEmail: 'i220971@nu.edu.pk',
  resume: '/resume.pdf',
  ogImage: '/og-image.png',
} as const;

export const SOCIALS = {
  github: 'https://github.com/awwab-03',
  linkedin: 'https://www.linkedin.com/in/awwab-aamir-578086348/',
  githubUser: 'awwab-03',
} as const;

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
] as const;

/* -------------------------------------------------------------------------- */
/*  Hero metrics                                                              */
/* -------------------------------------------------------------------------- */

export const HERO_STATS = [
  { value: '3+', label: 'Production-grade projects' },
  { value: '10+', label: 'Technologies shipped' },
  { value: '2027', label: 'B.S. Computer Science' },
] as const;

/* -------------------------------------------------------------------------- */
/*  Skills (capability groups)                                                */
/* -------------------------------------------------------------------------- */

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    icon: Code2,
    description:
      'Accessible, responsive interfaces with modern React patterns and type-safe component architecture.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES2022+)', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend Engineering',
    icon: Server,
    description:
      'REST APIs, authentication, and data layers designed for correctness, security, and scale.',
    items: ['Node.js', 'Express.js', 'REST API Design', 'JWT Auth', 'Rate Limiting', 'File Validation'],
  },
  {
    title: 'AI & Computer Vision',
    icon: Brain,
    description:
      'Applied machine intelligence — resume parsing, scoring engines, and real-time vision pipelines.',
    items: ['Python', 'OpenCV', 'MediaPipe', 'ATS Scoring', 'Resume Parsing', 'Answer Evaluation'],
  },
  {
    title: 'Data & Infrastructure',
    icon: Cloud,
    description:
      'Persistent data modeling and cloud deployment workflows from commit to production.',
    items: ['MongoDB', 'Git & GitHub', 'Linux', 'Vercel', 'Render', 'CI/CD Workflows'],
  },
];

/* -------------------------------------------------------------------------- */
/*  Tech stack (flat marquee/grid)                                            */
/* -------------------------------------------------------------------------- */

export interface TechItem {
  name: string;
  icon: LucideIcon;
}

export const TECH_STACK: TechItem[] = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Layers },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'Express.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'Python', icon: Terminal },
  { name: 'OpenCV', icon: Cpu },
  { name: 'MediaPipe', icon: Brain },
  { name: 'JWT', icon: ShieldCheck },
  { name: 'Git', icon: GitBranch },
  { name: 'Linux', icon: Terminal },
  { name: 'Vercel', icon: Cloud },
  { name: 'Render', icon: Cloud },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export type ProjectCategory = 'Full Stack' | 'AI' | 'Computer Vision';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  categories: ProjectCategory[];
  featured: boolean;
  github: string;
  live?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'prepai',
    name: 'PrepAI',
    tagline: 'AI-powered interview preparation platform',
    description:
      'A full-stack platform that turns a résumé and a job description into a tailored interview-prep workflow: it parses the résumé, scores it against ATS criteria, matches it to the target role, and generates résumé-aware questions with automated answer evaluation.',
    highlights: [
      'Résumé upload, parsing, and ATS scoring engine',
      'Job-description matching with role-specific question generation',
      'Automated answer evaluation and feedback loop',
      'Secure JWT auth, protected routes, file validation, and rate limiting',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel', 'Render'],
    categories: ['Full Stack', 'AI'],
    featured: true,
    github: 'https://github.com/awwab-03/PREP',
  },
  {
    slug: 'lost-and-found',
    name: 'Lost & Found Management System',
    tagline: 'Full-stack platform for reporting and recovering lost items',
    description:
      'A web application that streamlines the entire lost-and-found lifecycle — from reporting an item to tracking its status through a management dashboard with clear, role-based user workflows.',
    highlights: [
      'Structured item reporting and status tracking',
      'Management dashboard for administrators',
      'End-to-end user workflows for claim and recovery',
      'Relational data modeling for items and users',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Full Stack'],
    featured: true,
    github: 'https://github.com/awwab-03/SWR',
  },
  {
    slug: 'neck-posture-detection',
    name: 'Real-Time Neck Posture Detection',
    tagline: 'Computer-vision system for live posture correction',
    description:
      'A real-time computer-vision application that uses webcam input to track neck alignment and deliver live posture feedback, built on a MediaPipe landmark pipeline processed with OpenCV.',
    highlights: [
      'Real-time posture tracking from webcam input',
      'Neck-alignment detection via pose landmarks',
      'Live on-screen feedback to correct posture',
      'Optimized OpenCV processing loop',
    ],
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    categories: ['Computer Vision', 'AI'],
    featured: true,
    github: 'https://github.com/MuhammadHasnain113/FYP-AlignCorrect',
  },
];

export const PROJECT_FILTERS: Array<'All' | ProjectCategory> = [
  'All',
  'Full Stack',
  'AI',
  'Computer Vision',
];

/* -------------------------------------------------------------------------- */
/*  About — focus areas                                                       */
/* -------------------------------------------------------------------------- */

export const ABOUT_FOCUS = [
  {
    icon: Layers,
    title: 'End-to-end ownership',
    body: 'I design data models, build APIs, and ship the interfaces on top of them — from authentication to deployment.',
  },
  {
    icon: Brain,
    title: 'Applied AI',
    body: 'I integrate practical machine intelligence — scoring engines, parsing, and vision pipelines — into products that solve real problems.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-minded',
    body: 'JWT auth, protected routes, input validation, and rate limiting are defaults in what I build, not afterthoughts.',
  },
] as const;
