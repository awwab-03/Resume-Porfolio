import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SITE, SOCIALS } from '@/lib/data';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/awwab-aamir',
    href: SOCIALS.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: `@${SOCIALS.githubUser}`,
    href: SOCIALS.github,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: SITE.location,
    href: undefined,
    external: false,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="I'm open to internships, entry-level engineering roles, and collaboration. The fastest way to reach me is email — I usually reply within a day."
        />

        {/* Primary call to action */}
        <Reveal className="mt-10">
          <div className="card relative overflow-hidden p-8 sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:36px_36px] opacity-[0.25] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
              aria-hidden
            />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  Reach me directly at
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 inline-block text-xl font-semibold text-foreground transition-colors hover:text-accent sm:text-2xl"
                >
                  {SITE.email}
                </a>
              </div>
              <a href={`mailto:${SITE.email}`} className="btn-primary shrink-0">
                <Mail className="h-4 w-4" aria-hidden />
                Email Me
              </a>
            </div>
          </div>
        </Reveal>

        {/* Channels */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const inner = (
              <div className="card flex h-full items-center gap-4 p-5 transition-colors hover:border-accent/40">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <channel.icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {channel.label}
                  </p>
                  <p className="flex items-center gap-1 truncate text-sm font-medium text-foreground">
                    {channel.value}
                    {channel.external && (
                      <ArrowUpRight
                        className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                        aria-hidden
                      />
                    )}
                  </p>
                </div>
              </div>
            );

            return (
              <Reveal key={channel.label} delay={i * 0.06}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
