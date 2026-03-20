"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { weeklyActivityData, monthlyProgressData } from "@/data/dashboard";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = ["Weekly Activity", "Monthly Progress"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass rounded-xl px-3 py-2 text-sm shadow-lg">
      <div className="font-semibold mb-1">{label}</div>
      {payload.map((entry: { name: string; value: number; color: string }) => (
        <div key={entry.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
          <span className="text-muted-foreground capitalize">{entry.name}:</span>
          <span className="font-medium">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

export function ActivityChart() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold">Activity Overview</h3>
        <div className="flex gap-1 p-1 bg-muted rounded-lg">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200",
                activeTab === i
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          {activeTab === 0 ? (
            <BarChart data={weeklyActivityData} barGap={4}>
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,107,53,0.05)" }} />
              <Bar dataKey="calories" name="Calories" fill="var(--brand-orange)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="duration" name="Minutes" fill="var(--brand-purple)" radius={[4, 4, 0, 0]} opacity={0.7} />
            </BarChart>
          ) : (
            <LineChart data={monthlyProgressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
              <YAxis domain={[74, 83]} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="weight" name="Weight (kg)" stroke="var(--brand-orange)" strokeWidth={2.5} dot={{ fill: "var(--brand-orange)", r: 4 }} />
              <Line type="monotone" dataKey="target" name="Target" stroke="var(--brand-emerald)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-6 mt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-1.5 rounded-full bg-[var(--brand-orange)] inline-block" />
          {activeTab === 0 ? "Calories" : "Weight"}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-1.5 rounded-full bg-[var(--brand-purple)] inline-block" />
          {activeTab === 0 ? "Minutes" : "Target"}
        </span>
      </div>
    </div>
  );
}
