import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SpotifyCard() {
  return (
    <Link
      href="https://open.spotify.com/show/0RuzlMSrHPxNj0ZlHeBIwk?si=WuyR9pjwQ56mgpPWGNz9nA"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        aspect-video
        items-center
        justify-center
        rounded-2xl
        border
        border-border/60
        bg-card
        px-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1DB954]/30
        hover:bg-[#1DB954]/[0.02]
        hover:shadow-md
      "
    >
      <div className="flex items-center gap-4">
        <Image
          src="/spotify-logo.svg"
          alt="Spotify"
          width={40}
          height={40}
          className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <div className="flex items-center gap-2">
          <span className="text-lg font-medium tracking-tight">
            Listen on Spotify
          </span>

          <ArrowUpRight
            size={18}
            className="text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1DB954]"
          />
        </div>
      </div>
    </Link>
  );
}