import { SITE } from "@/data/site";
import { NAV_ITEMS } from "@/data/navigation";
import { CONTACT_LINKS } from "@/data/contact";
import { Container } from "@/components/ui/Container";

// "use cache": tahun dihitung sekali lalu disimpan, supaya aman
// saat Next.js melakukan prerender halaman.
export async function Footer() {
  "use cache";

  const year = new Date().getFullYear();
  const socialLinks = CONTACT_LINKS.filter(
    (link) => link.id === "github" || link.id === "linkedin" || link.id === "email",
  );

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-medium tracking-tight">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {SITE.role} · {SITE.background}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={link.label}
                title={link.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </Container>

      <Container className="mt-8 border-t border-border pt-6">
        <p className="text-center text-xs text-muted-foreground">
          © {year} {SITE.name}. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
