'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, MapPin, Mail } from 'lucide-react';
import { SITE, SOCIALS, HERO_STATS } from '@/lib/data';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-aurora" />
        <div className="absolute right-[10%] top-[30%] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px] animate-aurora [animation-delay:-6s]" />
      </div>

      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for internships &amp; entry-level roles
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {SITE.name.split(' ').slice(0, 2).join(' ')}{' '}
          <span className="text-gradient">{SITE.name.split(' ').slice(2).join(' ')}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          {SITE.role} building full-stack web applications, AI-powered platforms,
          and computer-vision systems — from data model to deployment.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            {SITE.location}
          </span>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 text-accent" aria-hidden />
            {SITE.email}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
          <div className="flex items-center gap-2">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          variants={item}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-8"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold sm:text-3xl">{stat.value}</dd>
              <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
