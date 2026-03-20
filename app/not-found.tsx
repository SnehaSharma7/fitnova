import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-7xl mb-6">🏋️</div>
          <h1 className="text-4xl font-extrabold gradient-text mb-4">404 — Page Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            Looks like you took a wrong turn on the fitness trail. Let's get you back on track.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
