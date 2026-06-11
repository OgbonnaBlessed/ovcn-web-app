import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

const SpotifyCard = () => {
  return (
    <Link
      href="https://open.spotify.com/show/0RuzlMSrHPxNj0ZlHeBIwk?si=WuyR9pjwQ56mgpPWGNz9nA"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        mx-auto
        flex
        w-fit
        items-center
        overflow-hidden
        rounded-full
        border
        border-white/10
        bg-black
        px-5
        py-3
        transition-all
        duration-300
      "
    >
      {/* Hover shine */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <div className="relative z-10 flex items-center gap-3">
        <FaSpotify className="h-8 w-8 text-[#1DB954] transition-transform duration-300" />

        <span className="h-1 w-1 rounded-full bg-white/20" />

        <span className="text-sm font-medium tracking-wide text-white">
          Listen on Spotify
        </span>
      </div>
    </Link>
  );
};

export default SpotifyCard;
