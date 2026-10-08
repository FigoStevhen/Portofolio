import { ArrowUpRight, Send } from "lucide-react";
import { CONTACT_LINKS } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function Contact() {
  const emailLink = CONTACT_LINKS.find((link) => link.id === "email");

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="05 / Contact"
            title={"Let's build something together"}
            description="Have a project in mind or an opportunity to discuss? My inboxes are open — pick the channel you prefer."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_LINKS.map((link, index) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith("http");

            return (
              <FadeIn key={link.id} delay={index * 0.06} className="h-full">
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg motion-reduce:transform-none"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden
                    />
                  </div>

                  <p className="mt-4 font-medium">{link.label}</p>
                  <p className="mt-1 break-all font-mono text-xs text-muted-foreground">
                    {link.value}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {link.description}
                  </p>
                </a>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-medium">Prefer email?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Send me a message and I will get back to you.
              </p>
            </div>

            {emailLink ? (
              <Button href={emailLink.href}>
                <Send className="h-4 w-4" aria-hidden />
                Send an email
              </Button>
            ) : null}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
