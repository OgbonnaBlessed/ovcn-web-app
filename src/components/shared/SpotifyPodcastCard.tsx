import Link from "next/link";
import {
  ArrowUpRight,
  Headphones,
  Sparkles,
  Waves,
} from "lucide-react";

export default function SpotifyPodcastCard() {
  return (
    <Link
      href="https://open.spotify.com/show/0RuzlMSrHPxNj0ZlHeBIwk?si=WuyR9pjwQ56mgpPWGNz9nA"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        block
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-neutral-950
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#1DB954]/40
        hover:shadow-[0_25px_80px_rgba(29,185,84,0.18)]
      "
    >
      {/* Background Effects */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/20 via-transparent to-transparent" />

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1DB954]/15 blur-3xl transition-all duration-700 group-hover:scale-125" />

      <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Noise/Glass */}

      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative z-10 flex flex-col gap-10 p-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div className="flex gap-6">
          {/* Spotify Orb */}

          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#1DB954] shadow-[0_0_40px_rgba(29,185,84,0.45)]">
            <div className="absolute inset-0 rounded-full animate-ping bg-[#1DB954]/20" />

            <Headphones
              size={34}
              className="relative z-10 text-white"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#1DB954]">
              <Sparkles size={14} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                Spotify Podcast
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Never Miss a Message
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-300">
                Follow our Spotify podcast and carry God's Word with
                you everywhere. Listen during your commute, study,
                prayer time, or whenever you need fresh inspiration.
              </p>
            </div>

            {/* Stats */}

            <div className="flex flex-wrap gap-3 pt-1">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200">
                🎧 Stream Anytime
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200">
                📱 Mobile Friendly
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200">
                ✨ Follow for New Releases
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}

        <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
          <div className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
            Available on Spotify
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              bg-[#1DB954]
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              group-hover:scale-105
            "
          >
            Listen Now

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Waves size={14} />
            Updated regularly with new sermons
          </div>
        </div>
      </div>
    </Link>
  );
}