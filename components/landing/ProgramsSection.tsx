"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Flame, BarChart2, ArrowRight } from "lucide-react";
import { programs, categories } from "@/data/programs";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

export function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-[var(--brand-orange)] tracking-widest uppercase mb-4">
            Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
            Find Your Perfect{" "}
            <span className="gradient-text">Workout</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Expertly curated programs for every goal — whether you want to burn fat, build muscle or find inner peace.
          </p>
        </AnimatedSection>

        {/* Category filter */}
        <AnimatedSection delay={0.1} className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "gradient-brand text-white shadow-lg"
                  : "glass hover:text-foreground text-muted-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program, i) => (
            <AnimatedSection key={program.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-[var(--brand-orange)]/30 transition-all duration-300 h-full"
              >
                {/* Card top gradient banner */}
                <div
                  className={`h-36 bg-gradient-to-r ${program.color} flex items-center justify-center text-5xl relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/20 to-transparent" />
                  <span className="relative z-10 drop-shadow-lg">{program.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">
                      {program.category}
                    </span>
                    <span className="text-xs font-medium text-[var(--brand-orange)] bg-[var(--brand-orange)]/10 px-2.5 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--brand-orange)] transition-colors duration-200">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                      {program.calories} kcal
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BarChart2 className="w-3.5 h-3.5" />
                      {program.sessions} sessions
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {program.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/workout/${program.id}`}
                    className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl gradient-brand text-white text-sm font-semibold hover:opacity-90 transition-opacity group/btn"
                  >
                    <span>Start Program</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
