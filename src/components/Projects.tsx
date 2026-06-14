'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ArrowUpRight, Star } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { PROJECTS, PROJECT_FILTERS, type Project } from '@/lib/data';
import { cn } from '@/lib/utils';

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="card group relative flex h-full flex-col overflow-hidden p-7 transition-colors hover:border-accent/40"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          {project.featured && (
            <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
              <Star className="h-3 w-3 fill-current" aria-hidden />
              Featured
            </span>
          )}
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="mt-1 text-sm text-accent">{project.tagline}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2.5 text-sm leading-snug text-muted-foreground"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="chip font-mono">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 border-t border-border pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            <Github className="h-4 w-4" aria-hidden />
            Source
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Production-grade projects spanning full-stack development, applied AI, and computer vision."
        />

        {/* Filters */}
        <Reveal className="mt-10">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  filter === f
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-border text-muted-foreground hover:border-accent/50 hover:text-foreground'
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
