import { EXPERIENCE_ITEMS } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border bg-surface py-24 md:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="04 / Experience"
            title="My journey so far"
            description="Education, organizations, freelance work, and the projects that shaped my skills."
          />
        </FadeIn>

        <ol className="mt-12 space-y-6">
          {EXPERIENCE_ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <li className="relative border-l border-border pb-2 pl-8 md:pl-10">
                  <span className="absolute -left-3.5 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background">
                    <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                  </span>

                  <div className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-accent/40 sm:p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-mono text-xs font-medium text-accent">
                        {item.period}
                      </span>
                      {item.isPlaceholder ? (
                        <span className="rounded border border-dashed border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          placeholder
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-2 font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              </FadeIn>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
