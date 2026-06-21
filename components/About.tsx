"use client";

import { motion } from "motion/react";
import { Brain, Puzzle, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  {
    icon: Brain,
    title: "RL & Game AI",
    description:
      "Building intelligent agents with Deep Q-Networks and reinforcement learning techniques.",
  },
  {
    icon: Puzzle,
    title: "Algorithm Design",
    description:
      "Solving complex problems with provably optimal algorithms and combinatorial game theory.",
  },
  {
    icon: Trophy,
    title: "Olympiad Background",
    description:
      "AIR 925 in JEE Advanced, qualified INMO, RMO, IOQM, and multiple National Standard Examinations.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-width">
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            About Me
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Mathematics meets
            <br />
            <span className="text-gradient">intelligence</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal delay={0.2} direction="left">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Rishabh Patel, a B.Tech student in Mathematics and
                Computing at IIT Delhi, driven by a passion for reinforcement
                learning, game AI, and algorithm design.
              </p>
              <p>
                My work spans building autonomous game-playing agents using Deep
                Q-Networks to exploring combinatorial game theory beyond
                minimax approaches. I thrive at the intersection of mathematics
                and code.
              </p>
              <p>
                Currently in my 2nd year, I&apos;m open to internships and
                research opportunities where I can apply my skills to
                challenging real-world problems.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <div className="glass rounded-2xl p-6 space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg amber-gradient-subtle border border-border">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
