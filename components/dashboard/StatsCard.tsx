"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { DashboardStat } from "@/data/dashboard";

interface StatsCardProps {
  stat: DashboardStat;
  index: number;
}

export function StatsCard({ stat, index }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="relative rounded-2xl bg-card border border-border p-4 sm:p-6 overflow-hidden group cursor-default"
    >
      {/* Background glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${stat.color}`}
      />

      {/* Icon */}
      <div className={`relative z-10 inline-flex w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.color} items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 shadow-lg`}>
        {stat.icon}
      </div>

      <div className="relative z-10 flex items-end justify-between gap-1">
        <div className="min-w-0">
          <p className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5 sm:mb-1 truncate">
            {stat.label}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-3xl font-extrabold">{stat.value}</span>
            <span className="text-xs sm:text-sm text-muted-foreground">{stat.unit}</span>
          </div>
        </div>

        {/* Change badge */}
        <div
          className={`flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold flex-shrink-0 ${
            stat.changeType === "up"
              ? "bg-[var(--brand-emerald)]/10 text-[var(--brand-emerald)]"
              : "bg-[var(--brand-rose)]/10 text-[var(--brand-rose)]"
          }`}
        >
          {stat.changeType === "up" ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span className="hidden sm:inline">{stat.change}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 mt-3 sm:mt-4 h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
          initial={{ width: 0 }}
          animate={{ width: "72%" }}
          transition={{ delay: index * 0.08 + 0.4, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
