import { Genre } from "@/types/carrosel";
import Image from "next/image";

export function GenreCard({ genre }: { genre: Genre }) {
  return (
    <div
      className={`relative min-w-52 h-52 aspect-square rounded-xl overflow-hidden ${genre.gradient} p-6 flex flex-col justify-end group cursor-pointer`}
    >
      <div className="absolute right-[0%] bottom-[-0%] pointer-events-none transition-transform duration-500 group-hover:scale-110">
        <Image
          src="/icons/watermark_w.svg"
          alt="watermark"
          width={120}
          height={72}
          className=" brightness-0 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10">
        <h3 className="text-white text-3xl font-bold lg:text-h3">
          {genre.name}
        </h3>
        <p className="text-white/40 text-lg font-montserrat">Festival</p>
      </div>

      <div className="absolute inset-0 border-[3px] border-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none z-20" />
    </div>
  );
}
