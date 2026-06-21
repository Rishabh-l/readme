"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rishabh. All rights reserved.
        </p>

        <motion.a
          href="#home"
          whileHover={{ scale: 1.1, y: -2 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.a>
      </div>
    </footer>
  );
}
