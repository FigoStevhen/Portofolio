import { ArrowRight, Send } from "lucide-react";
import { SITE } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-16 overflow-hidden pb-20 pt-28 sm:pt-32 md:pb-28 md:pt-40"
    >
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <p className="font-mono text-sm font-medium text-accent">
                Hi, my name is
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {SITE.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
                I build clean, modern{" "}
                <span className="text-foreground">web experiences</span>.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I am an Informatics student focused on web development, with
                strong interests in UI/UX design, artificial intelligence, and
                building software that is useful and easy to use.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#projects">
                  View My Work
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button href="#contact" variant="outline">
                  Contact Me
                  <Send className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25} y={30}>
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-accent/5">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  figo.config.ts
                </span>
              </div>

              <div className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
                <p className="text-muted-foreground">
                  {"// Web Developer & Informatics student"}
                </p>
                <p>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-foreground">figo</span> = {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">name:</span>{" "}
                  <span className="text-accent">
                    &quot;{SITE.name}&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">role:</span>{" "}
                  <span className="text-accent">&quot;{SITE.role}&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">focus:</span> [
                  <span className="text-accent">&quot;web&quot;</span>,{" "}
                  <span className="text-accent">&quot;ui/ux&quot;</span>,{" "}
                  <span className="text-accent">&quot;ai&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">learning:</span>{" "}
                  <span className="text-accent">true</span>,
                </p>
                <p>{"}"}</p>
                <p className="pt-2 text-muted-foreground">
                  {"// ready to build something"}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
