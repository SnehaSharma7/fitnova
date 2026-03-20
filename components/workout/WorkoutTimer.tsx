"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Square } from "lucide-react";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

const PRESETS = [
  { label: "30s", seconds: 30 },
  { label: "1 min", seconds: 60 },
  { label: "2 min", seconds: 120 },
  { label: "5 min", seconds: 300 },
];

export function WorkoutTimer() {
  const [targetSeconds, setTargetSeconds] = useState(60);
  const [remaining, setRemaining] = useState(60);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const reset = useCallback(() => {
    setRunning(false);
    setDone(false);
    setRemaining(targetSeconds);
  }, [targetSeconds]);

  useEffect(() => {
    reset();
  }, [targetSeconds, reset]);

  useEffect(() => {
    if (!running) return;
    if (remaining <= 0) {
      setRunning(false);
      setDone(true);
      return;
    }
    const id = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(id);
  }, [running, remaining]);

  const progress = ((targetSeconds - remaining) / targetSeconds) * 100;
  const circumference = 2 * Math.PI * 54;

  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <h3 className="text-base font-bold mb-6">Rest Timer</h3>

      {/* Presets */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => setTargetSeconds(p.seconds)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
              targetSeconds === p.seconds
                ? "gradient-brand text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Circular timer */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <svg width="128" height="128" className="-rotate-90">
            {/* Track */}
            <circle cx="64" cy="64" r="54" fill="none" stroke="var(--border)" strokeWidth="8" />
            {/* Progress */}
            <motion.circle
              cx="64"
              cy="64"
              r="54"
              fill="none"
              stroke={done ? "var(--brand-emerald)" : "var(--brand-orange)"}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (circumference * progress) / 100}
              transition={{ duration: 0.5 }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="done"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-2xl"
                >
                  ✅
                </motion.div>
              ) : (
                <motion.div
                  key="time"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold tabular-nums"
                >
                  {formatTime(remaining)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={reset}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setRunning((r) => !r)}
            disabled={done}
            className="w-14 h-14 rounded-full gradient-brand text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 glow-orange"
          >
            {running ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </button>
          <button
            onClick={() => { setRunning(false); setRemaining(0); setDone(true); }}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <Square className="w-4 h-4" />
          </button>
        </div>

        {done && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-[var(--brand-emerald)] font-semibold"
          >
            Rest complete! Ready for next set 💪
          </motion.p>
        )}
      </div>
    </div>
  );
}
