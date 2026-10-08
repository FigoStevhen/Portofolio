import { Briefcase, GraduationCap, Rocket, Users } from "lucide-react";
import type { ExperienceItem } from "@/lib/types";

/**
 * PENGALAMAN / JOURNEY — SEMUA DATA DI BAWAH MASIH PLACEHOLDER.
 *
 * Jangan isi hal yang tidak benar-benar terjadi. Ganti isinya dengan
 * pengalaman aslimu (pendidikan, magang, organisasi, freelance, project).
 * Setelah diisi, ubah `isPlaceholder: false` supaya badge "Placeholder" hilang.
 * Tambahkan item baru dengan menyalin satu blok lalu ubah isinya.
 */
export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: "2022 — 2026",
    title: "Informatics Student",
    organization: "Udayana University",
    description:
      "Studying computer science with a focus on software development and web technologies.",
    icon: GraduationCap,
    isPlaceholder: false,
  },
  {
    period: "2024 — 2024",
    title: "Internship Role",
    organization: "PT Alam Sampurna Makmur",
    description:
      "Describe your real internship duties and what you learned here.",
    icon: Briefcase,
    isPlaceholder: false,
  },
  {
    period: "2024 — 2025",
    title: "BootCamp Game Development",
    organization: "Infinite Learning",
    description:
      "It's a 4 months bootcamp, where i do some project for game development as Game Designer.",
    icon: Users,
    isPlaceholder: false,
  },
  {
    period: "2026 — 2026",
    title: "BootCamp Game Development",
    organization: "IGDX (Komdigi)",
    description:
      "It's a 4 months bootcamp, where i do some project for game development as Game Designer.",
    icon: Rocket,
    isPlaceholder: false,
  },
];
