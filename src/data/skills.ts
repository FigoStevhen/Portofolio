import { BrainCircuit, Database, LayoutGrid, Palette, Server, Smartphone, Wrench } from "lucide-react";
import type { SkillGroup } from "@/lib/types";

/**
 * Daftar skill dikelompokkan per kategori.
 *
 * ATURAN:
 * - Hanya tulis teknologi yang benar-benar kamu kuasai/pelajari.
 * - Kalau skills kosong ("[]"), kategori tersebut TIDAK ditampilkan di website.
 *   Isi dulu lalu otomatis muncul.
 */
export const SKILL_GROUPS: SkillGroup[] = [
  { title: "Frontend", icon: LayoutGrid, skills: ["HTML", "CSS", "JavaScript"] },
  { title: "Backend", icon: Server, skills: [] },
  { title: "Mobile", icon: Smartphone, skills: ["Flutter"] },
  { title: "Database", icon: Database, skills: [] },
  { title: "Tools", icon: Wrench, skills: ["Git"] },
  { title: "AI / Machine Learning", icon: BrainCircuit, skills: ["Python", "Machine Learning"] },
  { title: "Design (UI/UX)", icon: Palette, skills: ["UI/UX"] },
];
