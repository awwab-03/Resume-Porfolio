import { Download, FileText, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SITE, SOCIALS } from '@/lib/data';

export function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <div
              className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:36px_36px] opacity-[0.25] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
              aria-hidden
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                  <FileText className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                  Want the full picture?
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Download my résumé for a detailed breakdown of my experience,
                  projects, and technical skills — or browse the source on GitHub.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                <a
                  href={SITE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="btn-primary"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download Résumé
                </a>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub Profile
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
