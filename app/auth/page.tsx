"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const initialTab = useMemo(() => (mode === "login" ? "login" : "signup"), [mode]);
  const [activeTab, setActiveTab] = useState<"login" | "signup">(initialTab as "login" | "signup");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    if (typeof window !== "undefined") {
      localStorage.setItem("fitnova_auth", "true");
      localStorage.setItem("fitnova_user_email", email);
      if (activeTab === "signup" && name.trim()) {
        localStorage.setItem("fitnova_user_name", name.trim());
      }
    }

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-24">
      <Card className="w-full max-w-md border-border">
        <CardHeader className="space-y-3">
          <CardTitle className="text-3xl font-bold">Welcome to FitNova</CardTitle>
          <CardDescription className="text-base">
            {activeTab === "login"
              ? "Login to continue your fitness journey"
              : "Create your account and start your fitness journey"}
          </CardDescription>
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "signup")}>
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="login" className="text-base">Login</TabsTrigger>
              <TabsTrigger value="signup" className="text-base">Sign Up</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {activeTab === "signup" && (
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-base font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Aryan Patel"
                  required={activeTab === "signup"}
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-base outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-base font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-base outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-base font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                minLength={6}
                required
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-base outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <Button type="submit" className="w-full h-11 text-base gradient-brand text-white hover:opacity-90" disabled={loading}>
              {loading
                ? "Please wait..."
                : activeTab === "login"
                  ? "Login & Go to Dashboard"
                  : "Sign Up & Go to Dashboard"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4 text-center">
            By continuing you agree to our terms. This is a frontend demo flow.
          </p>

          <p className="text-sm mt-4 text-center">
            <Link href="/" className="text-[var(--brand-orange)] hover:underline">
              Back to Home
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
