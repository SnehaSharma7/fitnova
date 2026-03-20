"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { programs } from "@/data/programs";

const categoryProgress = [
  { category: "Cardio", completed: 8, total: 12, color: "bg-[var(--brand-orange)]" },
  { category: "Strength", completed: 5, total: 10, color: "bg-[var(--brand-purple)]" },
  { category: "Yoga", completed: 6, total: 8, color: "bg-[var(--brand-emerald)]" },
];

export function DailyWorkout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Program categories with progress */}
      <div className="rounded-2xl bg-card border border-border p-6">
        <h3 className="text-base font-bold mb-6">Monthly Progress by Category</h3>
        <div className="space-y-5">
          {categoryProgress.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{item.category}</span>
                <span className="text-xs text-muted-foreground">
                  {item.completed}/{item.total} sessions
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${item.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.completed / item.total) * 100}%` }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick start programs */}
      <div className="rounded-2xl bg-card border border-border p-6">
        <h3 className="text-base font-bold mb-6">Quick Start</h3>
        <div className="grid grid-cols-2 gap-3">
          {programs.slice(0, 4).map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                href={`/workout/${program.id}`}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br ${program.color} text-white hover:opacity-90 transition-all duration-200 hover:scale-105 group`}
              >
                <span className="text-2xl">{program.icon}</span>
                <div className="text-xs font-semibold text-center leading-snug">{program.title}</div>
                <div className="text-xs opacity-80">{program.duration}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
