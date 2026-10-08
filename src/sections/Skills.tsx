import { SKILL_GROUPS } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function Skills() {
  // Kategori dengan skills kosong tidak ditampilkan.
  const visibleGroups = SKILL_GROUPS.filter(
    (group) => group.skills.length > 0,
  );

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border bg-surface py-24 md:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="02 / Skills"
            title="Technologies I work with"
            description="Grouped by area, from the interface all the way to machine learning."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <FadeIn key={group.title} delay={index * 0.05}>
                <article className="group h-full rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg motion-reduce:transform-none">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-medium tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
