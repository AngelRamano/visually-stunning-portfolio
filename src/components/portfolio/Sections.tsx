import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  FileText,
  Table2,
  Layers,
  GraduationCap,
  Award,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import heroMap from "@/assets/hero-map.jpg";
import {
  profile,
  researchAreas,
  currentResearch,
  projects,
  technicalSkills,
  softSkills,
  education,
  credentials,
  experience,
} from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid-paper pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <Reveal>
            <p className="eyebrow">Migration · Security · Governance</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-[3.6rem]">
              Researching how the securitization of
              <span className="relative mx-2 inline-block">
                <span className="relative z-10">migration</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/70" />
              </span>
              impacts individuals on the ground
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl border-l-4 border-accent pl-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
              {profile.intro}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="#research">
                  View My Research
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={profile.cv} download>
                  <Download className="size-4" />
                  Download My CV
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground">
              MA candidate, {profile.affiliation}.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-card)]">
            <span className="absolute -top-3 -left-3 size-8 rounded-md bg-accent" aria-hidden="true" />
            <img
              src={heroMap}
              alt="Illustration of Southern Africa with contour lines and dotted regional mobility routes"
              width={1200}
              height={1200}
              className="w-full rounded-xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="About" title="An academic path into migration research" />
        <Reveal delay={120}>
          <div className="mt-10 max-w-3xl border-l-4 border-accent pl-6 sm:pl-8">
            <p className="text-base leading-[1.85] text-foreground/85 sm:text-lg">
              {profile.biography}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Research Focus"
          title="Current research and core areas"
          lead="Work centred on the securitisation of migration and its consequences for rights, borders, and mobility in Southern Africa."
        />

        <Reveal delay={100}>
          <article className="mt-12 overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-lift)]">
            <div className="h-1.5 w-full bg-accent" />
            <div className="p-8 sm:p-12">
              <p className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
                Current Master's Research
              </p>
              <h3 className="mt-4 max-w-2xl text-2xl leading-snug sm:text-3xl">
                {currentResearch.title}
              </h3>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/85">
                {currentResearch.body}
              </p>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => (
            <Reveal key={area} delay={i * 50}>
              <div className="group flex h-full items-start gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
                <p className="text-sm font-semibold text-primary-deep">{area}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Selected Projects" title="Research projects and academic work" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/20 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <div className="h-1.5 w-full bg-primary" />
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                    Project {i + 1}
                  </p>
                  <h3 className="mt-3 text-xl leading-snug text-primary-deep">{project.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.body}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-accent/25 px-3 py-1 text-xs font-semibold text-accent-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillIcons = [FileText, Table2, Layers];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Skills" title="Technical and research capabilities" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {technicalSkills.map((skill, i) => {
            const Icon = skillIcons[i] ?? FileText;
            return (
              <Reveal key={skill.name} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg text-primary-deep">{skill.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 rounded-2xl bg-surface p-8 sm:p-10">
            <h3 className="text-lg text-primary-deep">Soft skills</h3>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <span className="mt-1.5 h-1.5 w-4 shrink-0 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Education" title="Academic qualifications" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <ol className="relative border-l-2 border-primary/30 pl-8">
            {education.map((item, i) => (
              <li key={item.title} className={i === education.length - 1 ? "" : "pb-10"}>
                <Reveal delay={i * 90}>
                  <span
                    className={`absolute -left-[9px] mt-1.5 size-4 rounded-full border-2 border-surface ${
                      item.current ? "bg-accent" : "bg-primary"
                    }`}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-xl leading-snug text-primary-deep">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.place}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-border bg-card p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Award className="size-5" />
              </span>
              <h3 className="mt-5 text-lg text-primary-deep">Certifications & credentials</h3>
              <ul className="mt-4 space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Teaching and academic support" />
        <ol className="mt-12 max-w-3xl border-l-2 border-primary/30 pl-8">
          {experience.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 90}>
                <span
                  className="absolute -ml-[41px] mt-1.5 size-4 rounded-full border-2 border-background bg-accent"
                  aria-hidden="true"
                />
                <p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 flex items-center gap-2 text-xl leading-snug text-primary-deep">
                  <Briefcase className="size-4 text-primary" />
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.place}</p>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Open to collaboration and conversation"
          lead="For research collaboration, academic enquiries, or policy engagement, please reach out directly."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-full flex-col rounded-2xl border border-primary/20 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <Mail className="size-5 text-primary" />
              <span className="mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                Email
              </span>
              <span className="mt-1 text-sm font-semibold break-all text-primary-deep">
                {profile.email}
              </span>
            </a>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-full flex-col rounded-2xl border border-primary/20 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <Linkedin className="size-5 text-primary" />
              <span className="mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                LinkedIn
              </span>
              <span className="mt-1 text-sm font-semibold text-primary-deep">Connect with me</span>
            </a>
          </Reveal>
          <Reveal delay={160}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-full flex-col rounded-2xl border border-primary/20 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <Github className="size-5 text-primary" />
              <span className="mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                GitHub
              </span>
              <span className="mt-1 text-sm font-semibold text-primary-deep">View profile</span>
            </a>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={profile.cv}
              download
              className="flex h-full flex-col rounded-2xl bg-accent p-6 text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <Download className="size-5" />
              <span className="mt-4 text-xs font-bold tracking-[0.16em] uppercase opacity-70">
                Curriculum Vitae
              </span>
              <span className="mt-1 text-sm font-semibold">Download my CV</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg">{profile.name}</p>
          <p className="mt-1 text-sm text-primary-foreground/70">{profile.role}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-accent hover:text-accent"
          >
            <Github className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-accent hover:text-accent"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-primary-foreground/60 lg:px-8">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
