import type { ComponentType } from "react";

/** Tipe untuk ikon (lucide-react maupun ikon SVG custom). */
export type IconType = ComponentType<{ className?: string }>;

export type NavItem = {
  label: string;
  href: string;
};

export type ProjectCategory =
  | "Web Development"
  | "Mobile"
  | "AI / Machine Learning"
  | "UI/UX";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  /** Path gambar di folder public/, null = pakai placeholder otomatis. */
  image: string | null;
  /** null = tombol tampil nonaktif sampai kamu isi URL aslinya. */
  liveDemo: string | null;
  sourceCode: string | null;
};

export type SkillGroup = {
  title: string;
  icon: IconType;
  /** Kosong = kategori tidak ditampilkan di website. */
  skills: string[];
};

export type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  icon: IconType;
  /** true = data masih placeholder, ditandai badge di website. */
  isPlaceholder: boolean;
};

export type ContactLink = {
  id: string;
  label: string;
  value: string;
  href: string;
  description: string;
  icon: IconType;
};
