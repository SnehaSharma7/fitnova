"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { WorkoutGrid } from "@/components/dashboard/WorkoutGrid";
import { DailyWorkout } from "@/components/dashboard/DailyWorkout";
import { dashboardStats } from "@/data/dashboard";
import { programs } from "@/data/programs";
import { workouts } from "@/data/workouts";
import { trainers } from "@/data/trainers";
import { Bell, Search, Menu, X, CheckCircle2, Settings } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userName, setUserName] = useState("Athlete");
  const [userEmail, setUserEmail] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Workout reminder", message: "HIIT Blast starts in 20 minutes", read: false },
    { id: 2, title: "Streak unlocked", message: "You reached a 14-day streak", read: false },
    { id: 3, title: "New trainer available", message: "Priya added a new yoga session", read: true },
  ]);

  const unreadCount = notifications.filter((item) => !item.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const searchIndex = useMemo(
    () => [
      ...programs.map((item) => ({
        id: `program-${item.id}`,
        title: item.title,
        subtitle: `${item.category} • ${item.level}`,
        href: `/workout/${item.id}`,
        type: "Program",
      })),
      ...workouts.map((item) => ({
        id: `workout-${item.id}`,
        title: item.title,
        subtitle: `${item.category} • ${item.duration}`,
        href: `/workout/${item.id}`,
        type: "Workout",
      })),
      ...trainers.map((item) => ({
        id: `trainer-${item.id}`,
        title: item.name,
        subtitle: `${item.specialization} • ${item.level}`,
        href: "/trainers",
        type: "Trainer",
      })),
    ],
    []
  );

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return searchIndex
      .filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const subtitleMatch = item.subtitle.toLowerCase().includes(query);
        const typeMatch = item.type.toLowerCase().includes(query);
        return titleMatch || subtitleMatch || typeMatch;
      })
      .slice(0, 8);
  }, [searchIndex, searchQuery]);

  const handleSearchNavigate = (href: string) => {
    router.push(href);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const openSearch = () => {
    setSearchQuery("");
    setSearchOpen(true);
    setNotificationOpen(false);
  };

  const closeSearch = () => {
    setSearchQuery("");
    setSearchOpen(false);
  };

  useEffect(() => {
    const savedName = localStorage.getItem("fitnova_user_name")?.trim() ?? "";
    const savedEmail = localStorage.getItem("fitnova_user_email")?.trim() ?? "";

    const toTitleCase = (value: string) =>
      value
        .toLowerCase()
        .split(" ")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

    const fallbackFromEmail = savedEmail
      ? savedEmail.split("@")[0].replace(/[._-]/g, " ")
      : "Athlete";

    const normalizedFallback = toTitleCase(fallbackFromEmail);
    const normalizedSavedName = toTitleCase(savedName);

    setUserName(normalizedSavedName || normalizedFallback || "Athlete");
    setUserEmail(savedEmail);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((p) => !p)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
        userName={userName}
        userEmail={userEmail}
      />

      {/* Main content: on desktop only, offset by sidebar width */}
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ${
          collapsed ? "md:ml-[72px]" : "md:ml-60"
        }`}
      >

        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-6 py-3 flex items-center justify-between gap-3 md:transition-all md:duration-300">
          <div className="flex items-center gap-3 min-w-0">
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground flex-shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-bold leading-tight truncate">
                Good morning, {userName} 👋
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block mt-0.5">
                Here&apos;s your fitness summary for today
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => {
                if (searchOpen) {
                  closeSearch();
                } else {
                  openSearch();
                }
              }}
              className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setNotificationOpen((prev) => !prev)}
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Open notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-2 right-2 min-w-1.5 h-1.5 rounded-full bg-[var(--brand-orange)]" />
              )}
            </button>
            <ThemeToggle />

            {notificationOpen && (
              <div className="absolute top-11 right-0 w-72 rounded-xl border border-border bg-card shadow-xl p-3 z-40">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold">Notifications</p>
                  <button
                    onClick={markAllRead}
                    className="text-xs text-[var(--brand-orange)] hover:underline"
                  >
                    Mark all read
                  </button>
                </div>
                <div className="space-y-2 max-h-64 overflow-auto scrollbar-hide">
                  {notifications.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-lg p-2.5 border ${
                        item.read ? "border-border bg-background" : "border-[var(--brand-orange)]/25 bg-[var(--brand-orange)]/5"
                      }`}
                    >
                      <p className="text-xs font-semibold">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {searchOpen && (
          <div className="border-b border-border px-4 sm:px-6 py-3 bg-background/95">
            <div className="max-w-xl relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && searchResults.length > 0) {
                    event.preventDefault();
                    handleSearchNavigate(searchResults[0].href);
                  }
                }}
                placeholder="Search workouts, trainers, programs..."
                className="w-full h-10 rounded-lg border border-border bg-card pl-9 pr-10 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-orange)]/30"
              />
              <button
                onClick={closeSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-md hover:bg-muted text-muted-foreground"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {searchQuery.trim().length > 0 && (
              <div className="max-w-xl mt-2 rounded-lg border border-border bg-card overflow-hidden">
                {searchResults.length > 0 ? (
                  <div className="max-h-72 overflow-auto scrollbar-hide">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleSearchNavigate(result.href)}
                        className="w-full text-left px-3 py-2.5 border-b last:border-b-0 border-border hover:bg-muted/60 transition-colors"
                      >
                        <p className="text-sm font-medium">{result.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{result.subtitle}</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="px-3 py-3 text-sm text-muted-foreground">
                    No results found for &quot;{searchQuery}&quot;
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Scrollable page body */}
        <main className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Stats cards — 2 cols on mobile, 4 on xl */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
            {dashboardStats.map((stat, i) => (
              <StatsCard key={stat.id} stat={stat} index={i} />
            ))}
          </div>

          {/* Charts + upcoming */}
          <div id="progress" className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 scroll-mt-24">
            <div className="lg:col-span-2">
              <ActivityChart />
            </div>
            <div>
              <WorkoutGrid />
            </div>
          </div>

          {/* Category progress + quick-start */}
          <DailyWorkout />

          {/* Settings */}
          <section id="settings" className="scroll-mt-24 rounded-2xl bg-card border border-border p-4 sm:p-6">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-[var(--brand-orange)]" />
                <h3 className="text-sm sm:text-base font-semibold">Quick Settings</h3>
              </div>
              <button
                onClick={() => setNotificationOpen(true)}
                className="text-xs px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                Open Notifications
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={markAllRead}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs bg-[var(--brand-emerald)]/10 text-[var(--brand-emerald)] hover:bg-[var(--brand-emerald)]/20 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Mark notifications read
              </button>
              <button
                onClick={openSearch}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/20 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                Open search
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
