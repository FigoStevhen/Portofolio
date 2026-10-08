import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

const INTERESTS = [
  "Web Development",
  "UI/UX Design",
  "Artificial Intelligence",
  "Software Development",
];

const QUICK_FACTS = [
  { label: "Role", value: "Web Developer" },
  { label: "Studying", value: "Informatics" },
  { label: "Focus", value: "Frontend & web development" },
  { label: "Interested in", value: "UI/UX, AI, technology" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="01 / About me"
            title={
              <>
                Informatics student who enjoys{" "}
                <span className="text-muted-foreground">
                  building for the web
                </span>
                .
              </>
            }
            description="I like taking an idea and turning it into an interface that feels simple, clear, and good to use."
          />
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <FadeIn delay={0.05}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                My name is Figo Stevhen Hidayat. I am an Informatics student
                who spends most of my time learning and building things for the
                web, from small pages to full applications.
              </p>
              <p>
                Besides web development, I am interested in UI/UX design,
                artificial intelligence, and software development in general. I
                believe the best way to learn is by shipping real projects and
                improving them step by step.
              </p>
              <p>
                I am still early in my journey, and I treat every project as a
                chance to write cleaner code, think about real users, and
                understand how modern products are built.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                What I am into
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Quick facts
              </p>
              <dl className="mt-5 divide-y divide-border">
                {QUICK_FACTS.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1 py-3.5">
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
