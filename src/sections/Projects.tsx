import Image from "next/image";
import { BrainCircuit, ExternalLink, Monitor, Palette, Smartphone } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";
import type { IconType, Project, ProjectCategory } from "@/lib/types";

const CATEGORY_ICONS: Record<ProjectCategory, IconType> = {
  "Web Development": Monitor,
  Mobile: Smartphone,
  "AI / Machine Learning": BrainCircuit,
  "UI/UX": Palette,
};

type ProjectCardProps = {
  project: Project;
  featured: boolean;
};

function ProjectCard({ project, featured }: ProjectCardProps) {
  const CategoryIcon = CATEGORY_ICONS[project.category];

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl motion-reduce:transform-none",
        featured && "md:col-span-2 md:flex-row",
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden border-b border-border bg-background",
          featured
            ? "aspect-video md:aspect-auto md:w-1/2 md:min-h-[300px] md:border-b-0 md:border-r"
            : "aspect-[16/10]",
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <>
            <div aria-hidden className="bg-grid absolute inset-0" />
            <span
              aria-hidden
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background/80 text-accent shadow-sm"
            >
              <CategoryIcon className="h-6 w-6" />
            </span>
          </>
        )}

        <span className="absolute left-3 top-3 rounded-md border border-border bg-background/90 px-2.5 py-1 text-xs font-medium backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col p-6", featured && "md:justify-center")}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          {featured ? (
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
              Featured
            </span>
          ) : null}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Button
            href={project.liveDemo ?? undefined}
            size="sm"
            disabled={!project.liveDemo}
            title={project.liveDemo ? undefined : "Link not available yet"}
            ariaLabel={`Live demo of ${project.title}`}
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            Live Demo
          </Button>
          <Button
            href={project.sourceCode ?? undefined}
            size="sm"
            variant="outline"
            disabled={!project.sourceCode}
            title={project.sourceCode ? undefined : "Link not available yet"}
            ariaLabel={`Source code of ${project.title}`}
          >
            <GithubIcon className="h-3.5 w-3.5" />
            Source Code
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="03 / Projects"
            title="Selected work"
            description="A mix of web, mobile, design, and machine learning projects. Links and images can be filled in later."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <FadeIn
              key={project.slug}
              delay={index === 0 ? 0 : 0.05}
              className={cn(index === 0 && "md:col-span-2")}
            >
              <ProjectCard project={project} featured={index === 0} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
