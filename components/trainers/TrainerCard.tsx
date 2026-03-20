"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, Award } from "lucide-react";
import { Trainer } from "@/data/trainers";
import { Badge } from "@/components/ui/badge";

interface TrainerCardProps {
  trainer: Trainer;
  index: number;
}

export function TrainerCard({ trainer, index }: TrainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-[var(--brand-orange)]/30 hover:shadow-xl transition-all duration-300"
    >
      {/* Header with image */}
      <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Featured badge */}
        {trainer.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full gradient-brand text-white text-xs font-bold flex items-center gap-1">
            <Award className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full glass text-white text-xs font-semibold">
          <Star className="w-3 h-3 fill-[var(--brand-orange)] text-[var(--brand-orange)]" />
          {trainer.rating}
        </div>

        {/* Name overlay */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="text-white font-bold text-lg leading-tight">{trainer.name}</div>
          <div className="text-white/80 text-sm">{trainer.specialization}</div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <Badge variant="secondary" className="text-xs">{trainer.category}</Badge>
          <Badge variant="outline" className="text-xs">{trainer.level}</Badge>
        </div>

        {/* Bio */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {trainer.bio}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center">
            <div className="text-sm font-bold">{trainer.experience}</div>
            <div className="text-[10px] text-muted-foreground">Experience</div>
          </div>
          <div className="text-center border-x border-border">
            <div className="text-sm font-bold">{trainer.reviews}</div>
            <div className="text-[10px] text-muted-foreground">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold flex items-center justify-center gap-1">
              <Users className="w-3 h-3" />
              {trainer.clients > 999 ? `${(trainer.clients / 1000).toFixed(1)}K` : trainer.clients}
            </div>
            <div className="text-[10px] text-muted-foreground">Clients</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {trainer.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Book */}
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm">
            <span className="font-bold text-[var(--brand-orange)]">₹{trainer.pricePerSession.toLocaleString()}</span>
            <span className="text-muted-foreground text-xs">/session</span>
          </div>
          <button className="flex-1 py-2 rounded-xl gradient-brand text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            Book Session
          </button>
        </div>
      </div>
    </motion.div>
  );
}
