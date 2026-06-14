import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { NAV_LINKS, SITE, SOCIALS } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-accent-foreground">
                AA
              </span>
              {SITE.shortName}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {SITE.role} based in {SITE.location}. Building full-stack and
              AI-powered products, end to end.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {SITE.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
