'use client';

import { useState, type FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SITE, SOCIALS } from '@/lib/data';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/awwab-aamir',
    href: SOCIALS.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: `@${SOCIALS.githubUser}`,
    href: SOCIALS.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: SITE.location,
    href: undefined,
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  /**
   * Composes a pre-filled email via the visitor's mail client. This keeps the
   * site fully static and deployable with zero backend configuration. To use a
   * hosted form service instead, see the note in README.md.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="I'm open to internships, entry-level engineering roles, and collaboration. The fastest way to reach me is email — I usually reply within a day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Channels */}
          <Reveal className="space-y-3">
            {channels.map((channel) => {
              const content = (
                <div className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <channel.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {channel.label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {channel.value}
                    </p>
                  </div>
                </div>
              );

              return channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={channel.label}>{content}</div>
              );
            })}
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="card space-y-5 p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or project…"
                  className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                {sent ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden />
                    Opening your mail app…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
