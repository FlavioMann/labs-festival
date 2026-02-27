import { Artist } from "@/types/carrosel";
import Image from "next/image";

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="relative min-w-[208px] lg:min-w-[288px] aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 rounded-xl border-[3px] border-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none" />
      <Image
        src={artist.image}
        alt={artist.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        className="object-cover"
        draggable={false}
        priority={artist.id <= 3}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-6 z-10 pointer-events-none">
        <span className="text-white font-roboto text-h6 lg:text-h5 font-medium">
          {artist.name}
        </span>
      </div>
    </div>
  );
}
