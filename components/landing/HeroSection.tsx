"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "50K+", label: "Active Members" },
  { icon: Star, value: "4.9", label: "App Rating" },
  { icon: TrendingUp, value: "200+", label: "Programs" },
];

const floatingBadges = [
  { text: "🔥 HIIT Blast", delay: 0, position: "top-[20%] left-[8%]" },
  { text: "🧘 Yoga Flow", delay: 0.2, position: "top-[35%] right-[6%]" },
  { text: "💪 Strength", delay: 0.4, position: "bottom-[35%] left-[5%]" },
  { text: "🚴 Cycling", delay: 0.6, position: "bottom-[20%] right-[8%]" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--brand-orange)]/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--brand-purple)]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--brand-orange)]/5 blur-[120px]" />
      </div>

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.text}
          className={`absolute ${badge.position} hidden lg:flex glass rounded-full px-4 py-2 text-sm font-medium text-foreground z-10`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: badge.delay + 1, duration: 0.5 },
            scale: { delay: badge.delay + 1, duration: 0.5 },
            y: { delay: badge.delay + 1.5, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {badge.text}
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-0 z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--brand-orange)]/20 text-sm font-medium text-[var(--brand-orange)] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
            India&apos;s #1 Fitness Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
          >
            Transform Your{" "}
            <span className="gradient-text">Body & Mind</span>{" "}
            Like Never Before
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
          >
            Join 50,000+ members who train with India&apos;s top fitness experts.
            Yoga, HIIT, Strength & more — all in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
          >
            <Link
              href="/auth?mode=signup"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-all duration-300 glow-orange"
            >
              Start Fitness Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center gap-3 px-5 py-3.5 rounded-xl hover:bg-muted/50 transition-colors duration-200 font-medium text-sm group">
              <span className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-white ml-0.5" />
              </span>
              Watch how it works
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-8 flex-wrap"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-brand-subtle flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--brand-orange)]" />
                </div>
                <div>
                  <div className="text-xl font-bold">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
