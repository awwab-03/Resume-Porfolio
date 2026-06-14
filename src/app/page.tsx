import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SITE, SOCIALS, PROJECTS } from '@/lib/data';

/** JSON-LD structured data for rich search results. */
function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    jobTitle: SITE.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'PK',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'FAST National University of Computer and Emerging Sciences',
    },
    sameAs: [SOCIALS.github, SOCIALS.linkedin],
    knowsAbout: [
      'Full Stack Development',
      'Backend Engineering',
      'Artificial Intelligence',
      'Computer Vision',
      'React',
      'Next.js',
      'Node.js',
      'Python',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
  };

  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: PROJECTS.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: project.name,
        description: project.description,
        codeRepository: project.github,
        programmingLanguage: project.stack.join(', '),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema, projectsSchema]),
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechStack />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
