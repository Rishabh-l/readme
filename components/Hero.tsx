"use client";

import { motion } from "motion/react";
import { ArrowDown, Mail, Phone } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

const letters = "Rishabh Patel".split("");
const letterName = "Rishabh Patel";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center text-center"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-medium tracking-widest uppercase text-muted"
        >
          Hello, I&apos;m
        </motion.p>

        <h1 className="mb-2 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          {letterName.split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.08,
                ease: [0.25, 0.4, 0.25, 1] as const,
              }}
              className={`inline-block ${letter === " " ? "w-[0.3em]" : ""} text-gradient`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="text-lg font-medium text-muted md:text-xl">
            B.Tech (Mathematics & Computing){" "}
            <span className="text-gradient-subtle">· IIT Delhi</span>
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-6 max-w-xl text-sm text-muted-foreground leading-relaxed"
        >
          Reinforcement Learning · Game AI · Algorithm Design
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
        >
          <a
            href="tel:+916388357354"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <Phone size={14} />
            +91 63883 57354
          </a>
          <a
            href="mailto:rp185918@gmail.com"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <Mail size={14} />
            rp185918@gmail.com
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full amber-gradient px-6 py-3 text-sm font-medium text-black transition-all hover:opacity-90 hover:shadow-lg hover:shadow-amber-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-card-hover hover:border-border-hover"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center gap-5"
        >
          {[
            {
              href: "https://github.com/Rishabh-l",
              label: "GitHub",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
            {
              href: "https://linkedin.com/in/rishabh-patel",
              label: "LinkedIn",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            { href: "mailto:rp185918@gmail.com", icon: null, label: "Email" },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              aria-label={label}
            >
              {icon || <Mail size={18} />}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
