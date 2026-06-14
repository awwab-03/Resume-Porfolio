import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { TECH_STACK } from '@/lib/data';

export function TechStack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I work with daily"
          description="The languages, frameworks, and platforms behind my projects."
        />

        <Reveal className="mt-12">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-7">
            {TECH_STACK.map((tech) => (
              <li
                key={tech.name}
                className="group flex flex-col items-center justify-center gap-3 bg-card px-4 py-8 transition-colors hover:bg-muted/50"
              >
                <tech.icon
                  className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-accent"
                  aria-hidden
                />
                <span className="text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
