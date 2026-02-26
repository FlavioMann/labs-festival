import { ExclusiveItem } from "@/types/carrosel";
import Image from "next/image";

export function ExclusiveCard({ item }: { item: ExclusiveItem }) {
  return (
    <div className="relative min-w-[440px] h-52 aspect-video rounded-xl overflow-hidden group cursor-pointer border border-white/5">
      <Image src={item.image} alt={item.title} fill className="object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 z-10" />

      <div className="absolute right-0 bottom-0 pointer-events-none z-20">
        <Image
          src="/icons/watermark_w.svg"
          alt="watermark"
          width={120}
          height={72}
          className="brightness-[0.9] bg-opacity-10"
        />
      </div>

      <div className="absolute bottom-6 left-6 z-20">
        <h3 className="text-white text-h3">{item.title}</h3>
        <p className="text-white/40 text-xl font-roboto ">Festival</p>
      </div>

      <div className="absolute inset-0 border-[3px] border-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none z-30" />
    </div>
  );
}
