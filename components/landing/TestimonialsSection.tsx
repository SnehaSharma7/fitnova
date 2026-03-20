"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-[var(--brand-orange)] text-[var(--brand-orange)]" : "text-muted"}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* BG orb */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--brand-purple)]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-[var(--brand-orange)] tracking-widest uppercase mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
            Real People,{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Join thousands of members who've transformed their lives with FitNova.
          </p>
        </AnimatedSection>

        {/* Featured testimonial */}
        <AnimatedSection delay={0.1} className="max-w-3xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative glass rounded-3xl p-8 sm:p-10"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[var(--brand-orange)]/20" />
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[var(--brand-orange)]/20 flex-shrink-0">
                  <Image
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonials[active].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[active].role}</div>
                  <StarRating rating={testimonials[active].rating} />
                </div>
                <div className="ml-auto text-right hidden sm:block">
                  <div className="text-xs text-muted-foreground">Program</div>
                  <div className="text-sm font-semibold text-[var(--brand-orange)]">{testimonials[active].program}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{testimonials[active].duration}</div>
                </div>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90 italic">
                &ldquo;{testimonials[active].review}&rdquo;
              </p>
              {testimonials[active].weightLost && (
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-brand-subtle text-sm font-semibold text-[var(--brand-orange)]">
                  🏆 Lost {testimonials[active].weightLost} in {testimonials[active].duration}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[var(--brand-orange)] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-[var(--brand-orange)]" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[var(--brand-orange)] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>

        {/* Mini testimonial grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                i === active ? "glass ring-1 ring-[var(--brand-orange)]/40" : "hover:bg-muted/50"
              }`}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
              </div>
              <div className="text-xs font-medium text-center leading-tight">{t.name.split(" ")[0]}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
