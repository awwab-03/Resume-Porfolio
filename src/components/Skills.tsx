import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SKILL_GROUPS } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to a team"
          description="Capabilities grouped by the way I actually use them on shipped projects."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07}>
              <div className="card h-full p-7 transition-colors hover:border-accent/40">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                    <group.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
