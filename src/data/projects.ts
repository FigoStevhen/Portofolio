import type { Project } from "@/lib/types";

/**
 * DATA PROJECT — SEMUA ISI FILE INI MASIH PLACEHOLDER.
 *
 * Cara mengubah:
 * - title / description / category / technologies: tulis sesuai project aslimu.
 * - image: taruh gambar di `public/images/projects/`, lalu tulis path-nya,
 *   contoh: "/images/projects/ecommerce.jpg".
 *   Biarkan `null` kalau belum ada gambar → tampil placeholder otomatis.
 * - liveDemo / sourceCode: isi URL asli. Biarkan `null` kalau belum ada,
 *   tombol akan tampil nonaktif.
 * - Project pertama ditampilkan lebih besar (featured). Ubah urutan untuk
 *   mengganti project yang tampil besar.
 */
export const PROJECTS: Project[] = [
  {
    slug: "ecommerce",
    title: "E-Commerce Website",
    description:
      "Online store with product catalog, shopping cart, and a checkout flow.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/Annahungstyles.png",
    liveDemo: null,
    sourceCode: "https://github.com/FigoStevhen/anna-hung.git",
  },
  {
    slug: "library-mobile",
    title: "Library Mobile Application",
    description:
      "Mobile app for browsing the catalog, borrowing books, and tracking return dates.",
    category: "Mobile",
    technologies: ["Flutter"],
    image: null,
    liveDemo: null,
    sourceCode: null,
  },
  {
    slug: "mango-ripeness",
    title: "Mango Ripeness Classification",
    description:
      "Machine learning model that classifies mango ripeness from images.",
    category: "AI / Machine Learning",
    technologies: ["Python", "Machine Learning"],
    image: null,
    liveDemo: null,
    sourceCode: null,
  },
  {
    slug: "otra",
    title: "OTRA",
    description:
      "UI/UX design project: research, wireframes, and a polished interface.",
    category: "UI/UX",
    technologies: ["UI/UX Design"],
    image: null,
    liveDemo: null,
    sourceCode: null,
  },
  {
    slug: "healthcare",
    title: "Healthcare Information Application",
    description:
      "Web application for managing and presenting health information clearly.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: null,
    liveDemo: null,
    sourceCode: null,
  },
];
