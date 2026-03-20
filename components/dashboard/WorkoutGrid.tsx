"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { upcomingWorkouts } from "@/data/dashboard";
import { programs } from "@/data/programs";

export function WorkoutGrid() {
  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold">Upcoming Workouts</h3>
        <Link href="/workout/hiit-blast" className="text-xs text-[var(--brand-orange)] hover:underline">
          View all
        </Link>
      </div>

      <div className="space-y-3">
        {upcomingWorkouts.map((workout, i) => {
          const program = programs.find((p) => p.id === workout.id);
          return (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 3 }}
              className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-muted/50 transition-all duration-200 group"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${program?.color || "from-orange-500 to-red-500"} flex items-center justify-center text-xl flex-shrink-0`}>
                {program?.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">{workout.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {workout.time}
                  <span>·</span>
                  {workout.duration}
                </div>
              </div>

              <Link href={`/workout/${workout.id}`} className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4 text-[var(--brand-orange)]" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
