import { LiveEvent } from "@/types/carrosel";
import Image from "next/image";

export function LiveEventCard({ event }: { event: LiveEvent }) {
  return (
    <div className="relative min-w-[320px] lg:min-w-[450px] flex flex-col rounded-xl overflow-hidden bg-dark group cursor-pointer border border-white/5">
      {/* Container da Imagem com Overlay de Hover */}
      <div className="relative aspect-video w-full">
        <Image
          src={event.image}
          alt={event.artist}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover"
          draggable={false}
        />

        <div className="absolute inset-0 bg-black/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>

            <button className="bg-orange hover:bg-orange/90 text-white px-4 py-1 rounded-full flex items-center gap-2 transition-colors">
              <Image
                src="/icons/play_icon.svg"
                width={16}
                height={16}
                alt="play"
                className="brightness-200"
              />
              <span className="font-roboto font-medium text-sm lg:text-base">
                Assistir
              </span>
            </button>

            {/* Botão de Adicionar (+) */}
            <button className="w-8 h-8 bg-dark rounded-full flex items-center justify-center text-white text-xl hover:bg-[#424249] transition-colors">
              <Image
                src="/icons/plus_icon.svg"
                width={16}
                height={16}
                alt="plus_icon"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Informações do Rodapé */}
      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-orange font-roboto font-medium text-sm lg:text-base">
            {event.artist}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
            <span className="text-red text-sm font-roboto font-normal">
              Live
            </span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <span className="text-white font-roboto text-xs lg:text-base opacity-90">
            {event.stage}
          </span>
          <span className="text-white font-roboto text-xs lg:text-sm tracking-tighter">
            {event.date} - {event.time}
          </span>
        </div>
      </div>

      {/* Borda interna alaranjada no hover */}
      <div className="absolute inset-0 border-[3px] border-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none z-20" />
    </div>
  );
}
