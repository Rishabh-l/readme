"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import { skills, skillCategories } from "@/data/skills";

function SkillBadge({ name, index }: { name: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05, y: -2 }}
      style={{ animationDelay: `${(index % 10) * 0.2}s` }}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent hover:bg-accent/5 animate-[float-badge_3s_ease-in-out_infinite]"
    >
      {name}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-deep">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-width"
      >
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            Skills
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            Tech stack & <span className="text-gradient">tools</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-10">
          {skillCategories.map((category, ci) => {
            const categorySkills = skills.filter(
              (s) => s.category === category
            );
            return (
              <ScrollReveal key={category} delay={0.1 * ci} direction="none">
                <div>
                  <h3 className="mb-4 text-sm font-medium tracking-widest uppercase text-muted">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, si) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        index={si}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
