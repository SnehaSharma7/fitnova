"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { trainers, trainerCategories, trainerLevels } from "@/data/trainers";
import { TrainerCard } from "@/components/trainers/TrainerCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

export default function TrainersPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState<"rating" | "reviews" | "price">("rating");

  const filtered = useMemo(() => {
    return trainers
      .filter((t) => {
        const matchesSearch =
          t.name.toLowerCase().includes(search.toLowerCase()) ||
          t.specialization.toLowerCase().includes(search.toLowerCase()) ||
          t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
        const matchesCategory = category === "All" || t.category === category;
        const matchesLevel = level === "All Levels" || t.level === level;
        return matchesSearch && matchesCategory && matchesLevel;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "reviews") return b.reviews - a.reviews;
        return a.pricePerSession - b.pricePerSession;
      });
  }, [search, category, level, sortBy]);

  const hasFilters = search || category !== "All" || level !== "All Levels";

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setLevel("All Levels");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <AnimatedSection className="mb-10">
            <span className="inline-block text-sm font-semibold text-[var(--brand-orange)] tracking-widest uppercase mb-4">
              Our Trainers
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Train with the{" "}
              <span className="gradient-text">Best Experts</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              India&apos;s top certified fitness professionals — ready to guide you toward your goals.
            </p>
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection delay={0.1} className="mb-8">
            <div className="glass rounded-2xl p-5 flex flex-col gap-4">
              {/* Search + sort row */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Search */}
                <div className="relative flex-1 min-w-52">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search trainers, specializations..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[var(--brand-orange)]/50 focus:border-[var(--brand-orange)]/30 transition-all"
                  />
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="py-2.5 px-3 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-1 focus:ring-[var(--brand-orange)]/50 cursor-pointer"
                  >
                    <option value="rating">Sort: Top Rated</option>
                    <option value="reviews">Sort: Most Reviews</option>
                    <option value="price">Sort: Price ↑</option>
                  </select>
                </div>

                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear
                  </button>
                )}
              </div>

              {/* Category + Level filters */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-muted-foreground font-medium">Category:</span>
                  {trainerCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                        category === cat
                          ? "gradient-brand text-white"
                          : "bg-muted/50 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-muted-foreground font-medium">Level:</span>
                  {trainerLevels.map((lv) => (
                    <button
                      key={lv}
                      onClick={() => setLevel(lv)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                        level === lv
                          ? "gradient-brand text-white"
                          : "bg-muted/50 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {lv}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              Showing <strong className="text-foreground">{filtered.length}</strong> trainer{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Trainer grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map((trainer, i) => (
                <TrainerCard key={trainer.id} trainer={trainer} index={i} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">No trainers found</h3>
              <p className="text-muted-foreground text-sm max-w-xs mb-6">
                Try adjusting your search or filters to discover more fitness experts.
              </p>
              <button
                onClick={clearFilters}
                className="px-5 py-2.5 rounded-xl gradient-brand text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
