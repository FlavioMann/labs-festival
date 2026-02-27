import Image from "next/image";

export function NikeAdCard() {
  return (
    <div className="relative min-w-[440px] h-[208px] rounded-xl bg-[#F6F6F6] flex items-center overflow-hidden border border-white/5 group cursor-pointer p-4">
      <div className="absolute top-3 left-4">
        <Image
          src="/assets/exclusive/logo_nike.png"
          width={48}
          height={27}
          alt="nike"
          className="object-contain"
        />
      </div>

      <div className="absolute top-2 right-4">
        <div className="flex items-center gap-1 bg-orange text-white text-[10px] px-3 py-1 rounded-full font-roboto font-light">
          <span>Announcement</span>
          <Image
            src="/icons/info_icon.svg"
            width={10}
            height={10}
            alt="info"
            className="brightness-200"
          />
        </div>
      </div>

      <div className="flex items-center w-full h-full gap-8 pt-6">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/assets/exclusive/tenis_nike.png"
            width={180}
            height={100}
            alt="tenis_nike"
            draggable={false}
            className="object-contain"
          />
        </div>

        <div className="w-[1.5px] bg-black/20 h-32" />

        <div className="flex-1 flex flex-col gap-1">
          <h3 className="text-lg text-[#C39E93] font-bebas leading-none uppercase">
            Nike Air Max 90 Futura
          </h3>

          <p className="text-[8px] text-black font-roboto leading-relaxed max-w-[220px]">
            The Nike Air Max 90 Futura re-imagines the icon of Air through your
            eyes—from design to testing to styling.
          </p>

          <div className="flex items-center gap-4 py-1">
            <div className="flex items-center gap-3 border-r border-black/10 pr-3">
              <Image
                src="/assets/exclusive/tenis_rigth.png"
                width={178}
                height={24}
                alt="tenis_rigth"
                draggable={false}
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <button className="flex flex-row justify-center items-baseline gap-1 bg-[#C39E93] text-white p-1 rounded-sm hover:bg-[#b28d82] transition-colors">
              <p className="text-xs font-medium ">learn more</p>
              <Image
                src="/icons/arrow_rigth_icon.svg"
                width={8}
                height={8}
                alt="arrow_rigth_icon"
                className="object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 border-[3px] border-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none z-20" />
    </div>
  );
}
