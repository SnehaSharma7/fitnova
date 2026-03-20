import { Play, Volume2 } from "lucide-react";

interface VideoPlaceholderProps {
  thumbnail: string;
  title: string;
  trainer: string;
}

export function VideoPlaceholder({ thumbnail, title, trainer }: VideoPlaceholderProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-video bg-card border border-border group cursor-pointer">
      {/* Thumbnail via gradient since next/image with external URLs needs config */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnail})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full gradient-brand flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl glow-orange">
          <Play className="w-7 h-7 text-white ml-1" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
        <div>
          <div className="text-white font-semibold text-sm">{title}</div>
          <div className="text-white/70 text-xs mt-0.5">Trainer: {trainer}</div>
        </div>
        <button className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      {/* Duration badge */}
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md glass text-white text-xs font-medium">
        Preview
      </div>
    </div>
  );
}
