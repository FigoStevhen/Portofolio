import type { NavItem } from "@/lib/types";

/** Menu navbar. href harus berupa anchor section (#nama-section). */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** Id section, otomatis diambil dari NAV_ITEMS supaya tidak duplikat. */
export const SECTION_IDS: readonly string[] = NAV_ITEMS.map((item) =>
  item.href.slice(1),
);
