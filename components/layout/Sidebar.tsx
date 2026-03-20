"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Dumbbell,
  Users,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { href: "/workout/hiit-blast", icon: Dumbbell, label: "Workouts" },
  { href: "/trainers", icon: Users, label: "Trainers" },
  { href: "/dashboard#progress", icon: BarChart2, label: "Progress" },
  { href: "/dashboard#settings", icon: Settings, label: "Settings" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
  userName: string;
  userEmail: string;
}

function SidebarContent({
  collapsed,
  onToggle,
  onMobileClose,
  userName,
  userEmail,
  isMobile = false,
}: {
  collapsed: boolean;
  onToggle: () => void;
  onMobileClose: () => void;
  userName: string;
  userEmail: string;
  isMobile?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentHash, setCurrentHash] = useState("");
  const avatarInitial = (userName?.trim().charAt(0) || "A").toUpperCase();

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("fitnova_auth");
      localStorage.removeItem("fitnova_user_email");
      localStorage.removeItem("fitnova_user_name");
    }
    if (isMobile) {
      onMobileClose();
    }
    router.push("/auth?mode=login");
  };

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash || "");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  return (
    <div className="flex flex-col h-full">
      {/* Logo row */}
      <div className="flex items-center justify-between h-16 px-4 flex-shrink-0 border-b border-border">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <AnimatePresence>
            {(!collapsed || isMobile) && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                className="text-lg font-bold gradient-text whitespace-nowrap"
              >
                FitNova
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* Mobile close / Desktop toggle */}
        {isMobile ? (
          <button
            onClick={onMobileClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onToggle}
            className="w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto scrollbar-hide">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isOverview = href === "/dashboard";
          const isHashItem = href.includes("#");
          const active = isOverview
            ? pathname === "/dashboard" && currentHash === ""
            : isHashItem
              ? `${pathname}${currentHash}` === href
              : pathname === href;
          const show = !collapsed || isMobile;
          return (
            <div key={label} className="relative group/item">
              <Link
                href={href}
                onClick={isMobile ? onMobileClose : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-xl transition-all duration-200 relative",
                  show ? "px-3 py-2.5" : "px-0 py-2.5 justify-center",
                  active
                    ? "gradient-brand text-white shadow-sm"
                    : isMobile
                      ? "text-foreground/90 hover:text-foreground hover:bg-muted/70"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <AnimatePresence>
                  {show && (
                    <motion.span
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.15 }}
                      className="text-sm font-medium whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* Tooltip when collapsed (desktop only) */}
              {collapsed && !isMobile && (
                <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 rounded-lg bg-popover border border-border text-xs font-medium whitespace-nowrap opacity-0 group-hover/item:opacity-100 transition-opacity z-50 shadow-lg">
                  {label}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User area */}
      <div className={cn("p-3 border-t border-border flex-shrink-0", collapsed && !isMobile ? "flex justify-center" : "")}>
        {collapsed && !isMobile ? (
          <button
            onClick={handleSignOut}
            className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors"
            aria-label="Sign out"
            title="Sign out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {avatarInitial}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">{userName}</div>
              <div className="text-xs text-muted-foreground truncate">{userEmail || "fitnova@member.com"}</div>
            </div>
            <button
              onClick={handleSignOut}
              className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
              aria-label="Sign out"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose, userName, userEmail }: SidebarProps) {
  return (
    <>
      {/* ── Desktop sidebar ── */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 240 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden md:flex flex-col fixed left-0 top-0 h-screen bg-card border-r border-border z-30 overflow-hidden"
      >
        <SidebarContent
          collapsed={collapsed}
          onToggle={onToggle}
          onMobileClose={onMobileClose}
          userName={userName}
          userEmail={userEmail}
        />
      </motion.aside>

      {/* ── Mobile overlay backdrop ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={onMobileClose}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-50 flex flex-col md:hidden"
          >
            <SidebarContent
              collapsed={false}
              onToggle={onToggle}
              onMobileClose={onMobileClose}
              userName={userName}
              userEmail={userEmail}
              isMobile
            />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
