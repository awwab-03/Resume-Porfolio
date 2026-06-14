import { GraduationCap, MapPin, Briefcase } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { ABOUT_FOCUS, SITE } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Engineering across the full stack"
          description="I am a Computer Science student at FAST-NUCES who builds and ships complete products — designing data models, securing APIs, integrating applied AI, and deploying to the cloud."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Narrative */}
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              My work spans three domains that reinforce one another: full-stack
              web development, applied AI, and computer vision. On{' '}
              <span className="font-medium text-foreground">PrepAI</span>, I built
              a résumé-parsing and ATS-scoring engine behind a secure Node and
              Express API, then wrapped it in a React interface deployed to
              Vercel and Render.
            </p>
            <p>
              I care about the parts of engineering recruiters rarely see in a
              student portfolio: JWT authentication, protected routes, input
              validation, and rate limiting as defaults — not afterthoughts. When
              a problem calls for machine intelligence, I reach for Python,
              OpenCV, and MediaPipe to build real-time systems that respond to the
              physical world.
            </p>
            <p>
              I am targeting full-stack, backend, software-engineering, and
              AI-engineering roles where I can own features end to end and ship
              them to production.
            </p>

            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              <li className="flex items-center gap-3 text-sm text-foreground">
                <GraduationCap className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                B.S. Computer Science, FAST-NUCES (2027)
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                {SITE.location}
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground sm:col-span-2">
                <Briefcase className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                Open to internships and entry-level engineering roles
              </li>
            </ul>
          </Reveal>

          {/* Focus cards */}
          <div className="space-y-4">
            {ABOUT_FOCUS.map((focus, i) => (
              <Reveal key={focus.title} delay={i * 0.08}>
                <div className="card group p-6 transition-colors hover:border-accent/40">
                  <focus.icon
                    className="h-6 w-6 text-accent transition-transform group-hover:scale-110"
                    aria-hidden
                  />
                  <h3 className="mt-4 text-base font-semibold">{focus.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {focus.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
