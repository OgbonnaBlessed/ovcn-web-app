import Link from "next/link";
import { ExternalLink, Headphones } from "lucide-react";

export default function SpotifyPodcastCard() {
  return (
    <Link
      href="https://open.spotify.com/show/0RuzlMSrHPxNj0ZlHeBIwk?si=WuyR9pjwQ56mgpPWGNz9nA"
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full rounded-3xl border border-green-500/20 bg-gradient-to-r from-[#1DB954]/10 via-[#1DB954]/5 to-transparent p-6 transition-all duration-300 hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/10"
    >
      <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="flex gap-4">
          <div className="rounded-2xl bg-[#1DB954] p-3 text-white">
            <Headphones size={24} />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1DB954]">
              Spotify Podcast
            </span>

            <h3 className="mt-1 text-2xl font-bold">
              Listen on Spotify
            </h3>

            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Stream every message, follow new releases, and stay inspired
              wherever you go.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-[#1DB954] px-5 py-3 font-medium text-white">
          Open Podcast
          <ExternalLink size={18} />
        </div>
      </div>
    </Link>
  );
}