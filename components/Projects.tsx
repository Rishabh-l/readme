"use client";

import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
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
            Projects
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            Selected <span className="text-gradient">work</span>
          </h2>
        </ScrollReveal>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => {
            const isLarge = i === 0;
            return (
              <div
                key={project.id}
                className={isLarge ? "md:col-span-2 md:row-span-2" : ""}
              >
                <ProjectCard project={project} index={i} />
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {other.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={featured.length + i}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
