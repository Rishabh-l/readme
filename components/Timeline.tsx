"use client";

import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import { experiences, achievements } from "@/data/experience";

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <div className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
        {index < experiences.length - 1 && (
          <div className="mt-1 h-full w-px bg-border" />
        )}
      </div>

      <div>
        <span className="text-xs font-medium text-accent">
          {experience.period}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-foreground">
          {experience.role}
        </h3>
        <p className="text-sm text-muted">{experience.company}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {experience.description}
        </p>
        <ul className="mt-3 space-y-1.5">
          {experience.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-width">
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            Education
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            My <span className="text-gradient">journey</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="none">
          <div className="mx-auto max-w-2xl">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-20 mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            Achievements
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <h2 className="mb-10 text-2xl font-bold tracking-tight md:text-3xl">
            Competitions &{" "}
            <span className="text-gradient">honors</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl p-5 transition-colors hover:bg-card-hover"
            >
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                {achievement.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
