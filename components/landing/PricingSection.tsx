"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { pricingPlans } from "@/data/dashboard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[var(--brand-orange)]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-[var(--brand-orange)] tracking-widest uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
            Invest in{" "}
            <span className="gradient-text">Your Health</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Choose the plan that matches your ambition. Upgrade or cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                !annual ? "gradient-brand text-white" : "text-muted-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                annual ? "gradient-brand text-white" : "text-muted-foreground"
              )}
            >
              Annual
              <span className="text-xs font-bold text-[var(--brand-emerald)] bg-[var(--brand-emerald)]/10 px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, i) => {
            const price = annual ? Math.round(plan.price * 0.8) : plan.price;
            return (
              <AnimatedSection key={plan.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "relative rounded-2xl p-7 h-full flex flex-col",
                    plan.popular
                      ? "gradient-brand text-white glow-orange"
                      : "bg-card border border-border hover:border-[var(--brand-orange)]/20 transition-colors"
                  )}
                >
                  {plan.badge && (
                    <div
                      className={cn(
                        "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap",
                        plan.popular ? "bg-white text-[var(--brand-orange)]" : "gradient-brand text-white"
                      )}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={cn("text-xl font-bold", plan.popular ? "text-white" : "")}>{plan.name}</h3>
                      {plan.popular && <Zap className="w-5 h-5 text-yellow-300" />}
                    </div>
                    <p className={cn("text-sm leading-relaxed", plan.popular ? "text-white/80" : "text-muted-foreground")}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-end gap-1.5">
                      <span className={cn("text-4xl font-extrabold", plan.popular ? "text-white" : "")}>
                        ₹{price.toLocaleString()}
                      </span>
                      <span className={cn("text-sm mb-2", plan.popular ? "text-white/70" : "text-muted-foreground")}>
                        /{plan.billingPeriod}
                      </span>
                    </div>
                    {annual && (
                      <div className={cn("text-xs mt-1", plan.popular ? "text-white/70" : "text-muted-foreground")}>
                        Billed ₹{(price * 12).toLocaleString()}/yr
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className={cn("w-4 h-4 flex-shrink-0 mt-0.5", plan.popular ? "text-white" : "text-[var(--brand-emerald)]")} />
                        <span className={plan.popular ? "text-white/90" : ""}>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm opacity-40">
                        <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={cn(
                      "w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200",
                      plan.popular
                        ? "bg-white text-[var(--brand-orange)] hover:bg-white/90"
                        : "gradient-brand text-white hover:opacity-90"
                    )}
                  >
                    Get Started with {plan.name}
                  </button>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center text-sm text-muted-foreground">
          All plans include a <strong className="text-foreground">7-day free trial</strong>. No credit card required.
        </AnimatedSection>
      </div>
    </section>
  );
}
