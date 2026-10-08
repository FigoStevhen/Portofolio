"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "@/data/navigation";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  activeId: string;
  onClose: () => void;
};

export function MobileMenu({ open, activeId, onClose }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    // Fokus ke link pertama supaya user keyboard bisa langsung navigasi.
    firstLinkRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-1 px-5 py-4 sm:px-8"
            >
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeId === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "rounded-md px-3 py-3 text-base transition-colors",
                      isActive
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
