import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Flame, BarChart2, User } from "lucide-react";
import { workouts } from "@/data/workouts";
import { VideoPlaceholder } from "@/components/workout/VideoPlaceholder";
import { ExerciseList } from "@/components/workout/ExerciseList";
import { WorkoutTimer } from "@/components/workout/WorkoutTimer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = workouts.find((w) => w.id === id);

  if (!workout) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back */}
          <Link
            href="/#programs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Programs
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <Badge>{workout.category}</Badge>
                  <Badge variant="secondary">{workout.level}</Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
                  {workout.title}
                </h1>
                <p className="text-muted-foreground max-w-xl">{workout.description}</p>
              </div>
            </div>

            {/* Meta chips */}
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-[var(--brand-orange)]" /> {workout.duration}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Flame className="w-4 h-4 text-[var(--brand-orange)]" /> {workout.calories} kcal
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BarChart2 className="w-4 h-4 text-[var(--brand-orange)]" /> {workout.exercises.length} exercises
              </div>
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4 text-[var(--brand-orange)]" /> {workout.trainer}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video */}
              <VideoPlaceholder
                thumbnail={workout.thumbnail}
                title={workout.title}
                trainer={workout.trainer}
              />

              {/* Warmup / Cooldown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-[var(--brand-orange)]/5 border border-[var(--brand-orange)]/20 p-4">
                  <div className="text-xs font-bold text-[var(--brand-orange)] uppercase tracking-wider mb-1">Warm-up</div>
                  <div className="text-sm">{workout.warmup}</div>
                </div>
                <div className="rounded-xl bg-[var(--brand-purple)]/5 border border-[var(--brand-purple)]/20 p-4">
                  <div className="text-xs font-bold text-[var(--brand-purple)] uppercase tracking-wider mb-1">Cool-down</div>
                  <div className="text-sm">{workout.cooldown}</div>
                </div>
              </div>

              {/* Exercises */}
              <ExerciseList exercises={workout.exercises} />
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <WorkoutTimer />

              {/* Tags */}
              <div className="rounded-2xl bg-card border border-border p-5">
                <h3 className="text-sm font-bold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {workout.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book trainer */}
              <div className="rounded-2xl gradient-brand p-5 text-white">
                <div className="text-sm font-bold mb-1">Train with {workout.trainer}</div>
                <div className="text-xs text-white/80 mb-4">Get personalized guidance for this workout</div>
                <Link
                  href="/trainers"
                  className="block text-center py-2.5 rounded-xl bg-white text-[var(--brand-orange)] text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
