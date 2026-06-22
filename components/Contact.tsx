"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socials = [
  {
    href: "https://github.com/Rishabh-l",
    label: "GitHub",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/rishabh-patel",
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  { href: "mailto:rp185918@gmail.com", label: "Email", icon: <Mail size={16} /> },
  { href: "tel:+916388357354", label: "Phone", icon: <Phone size={16} /> },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-width">
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            Contact
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s <span className="text-gradient">connect</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-10 max-w-md text-muted-foreground leading-relaxed">
            I&apos;m open to internships, research opportunities, and
            collaborations. Feel free to reach out!
          </p>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ScrollReveal delay={0.2} direction="left">
            <form
              ref={formRef}
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="hidden"
                name="access_key"
                value="6de7731c-198f-4c21-9afe-d68f6d6c7e61"
              />
              <input
                type="hidden"
                name="subject"
                value="New message from portfolio"
              />
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
              {error && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl amber-gradient px-6 py-3 text-sm font-medium text-black transition-all hover:opacity-90 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-60"
              >
                {submitting ? (
                  "Sending..."
                ) : sent ? (
                  "Sent! Thanks 🚀"
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <div className="flex flex-col justify-between gap-8">
              <div className="glass rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-foreground">
                  Find me online
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The best way to reach me is via email or phone. I typically
                  respond within 24 hours.
                </p>
                <div className="flex flex-wrap gap-3">
                  {socials.map(({ href, icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      {icon}
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="mb-2 font-semibold text-foreground">
                  Location
                </h3>
                <p className="text-sm text-muted-foreground">
                  Prayagraj / Delhi · Open to internships and research
                  opportunities
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
