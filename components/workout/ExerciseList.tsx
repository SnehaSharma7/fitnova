"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp, Dumbbell } from "lucide-react";
import { Exercise } from "@/data/workouts";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ExerciseListProps {
  exercises: Exercise[];
}

export function ExerciseList({ exercises }: ExerciseListProps) {
  const [expanded, setExpanded] = useState<string | null>(exercises[0]?.id ?? null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const toggleComplete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold">Exercise List</h3>
        <span className="text-sm text-muted-foreground">
          {completed.size}/{exercises.length} done
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-muted rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full rounded-full gradient-brand"
          animate={{ width: `${(completed.size / exercises.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="space-y-3">
        {exercises.map((exercise, i) => {
          const isExpanded = expanded === exercise.id;
          const isDone = completed.has(exercise.id);

          return (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={cn(
                "rounded-xl border transition-all duration-200",
                isDone ? "border-[var(--brand-emerald)]/30 bg-[var(--brand-emerald)]/5" : "border-border hover:border-[var(--brand-orange)]/20"
              )}
            >
              <button
                className="w-full flex items-center gap-4 p-4 text-left"
                onClick={() => setExpanded(isExpanded ? null : exercise.id)}
              >
                {/* Number / check */}
                <button
                  onClick={(e) => toggleComplete(exercise.id, e)}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200",
                    isDone
                      ? "bg-[var(--brand-emerald)] border-[var(--brand-emerald)] text-white"
                      : "border-border hover:border-[var(--brand-orange)] text-muted-foreground"
                  )}
                >
                  {isDone ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold">{i + 1}</span>}
                </button>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                    <span className={cn("text-sm font-semibold", isDone && "line-through text-muted-foreground")}>
                      {exercise.name}
                    </span>
                    <Badge variant="secondary" className="text-[10px] py-0 h-4">{exercise.difficulty}</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                    <span>{exercise.sets} sets × {exercise.reps}</span>
                    <span>·</span>
                    <span>Rest: {exercise.rest}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Dumbbell className="w-3 h-3" />
                      {exercise.muscle}
                    </span>
                  </div>
                </div>

                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 ml-12">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Instructions
                      </p>
                      <ol className="space-y-1.5">
                        {exercise.instructions.map((step, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-[var(--brand-orange)] font-bold flex-shrink-0">{j + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
