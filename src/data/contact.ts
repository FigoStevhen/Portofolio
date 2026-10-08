import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import type { ContactLink } from "@/lib/types";

/**
 * KANAL KONTAK — SEMUA DATA DI BAWAH MASIH PLACEHOLDER.
 *
 * Ganti `value` dan `href` dengan data aslimu:
 * - email      → "namakamu@email.com" dan "mailto:namakamu@email.com"
 * - whatsapp   → "https://wa.me/62812xxxxxxx" (nomor tanpa tanda + / spasi)
 * - github     → "https://github.com/username"
 * - linkedin   → "https://linkedin.com/in/username"
 */
export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: "figostevhen898@gmail.com",
    href: "mailto: figostevhen898@gmail.com",
    description: "Best way to reach me",
    icon: Mail,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+62895336908054",
    href: "https://wa.me/62895336908054",
    description: "Send me a direct message",
    icon: MessageCircle,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/FigoStevhen",
    href: "https://github.com/FigoStevhen",
    description: "Repositories and experiments",
    icon: GithubIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/figo-s-153479200",
    href: "https://linkedin.com/in/figo-s-153479200",
    description: "Professional profile",
    icon: LinkedinIcon,
  },
];
