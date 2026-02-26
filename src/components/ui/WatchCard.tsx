import Image from "next/image";
import { Artist } from "@/types/carrosel";

interface WatchCardProps {
  item: Artist;
  topTitle?: string;
  topSubtitle?: string;
  showWatermark?: boolean;
}

export function WatchCard({
  item,
  topTitle = "Watch Again",
  topSubtitle = "Festival",
  showWatermark = true,
}: WatchCardProps) {
  return (
    <div className="relative min-w-[208px] lg:min-w-[288px] aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer shadow-2xl">
      <div className="absolute inset-0 rounded-xl border-[3px] border-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none" />
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover"
        draggable={false}
      />
      <div className="absolute top-6 left-6 flex flex-col z-20 pointer-events-none">
        <span className="text-white font-roboto text-xl lg:text-2xl font-bold leading-none">
          {topTitle}
        </span>
        <span className="text-white/70 font-roboto text-lg lg:text-xl font-normal">
          {topSubtitle}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-8 z-10 pointer-events-none">
        <span className="text-white font-roboto text-xl lg:text-2xl font-bold">
          {item.name}
        </span>
      </div>
      {showWatermark && (
        <div className="absolute right-[0%] bottom-[0%] z-10 opacity-40">
          <Image
            src="/icons/watermark_w.svg"
            alt="watermark"
            width={130}
            height={130}
            className="brightness-0 invert"
          />
        </div>
      )}
    </div>
  );
}
