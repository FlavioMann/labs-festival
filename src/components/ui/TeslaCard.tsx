import Image from "next/image";

export function TeslaAdCard() {
  return (
    <div className="relative min-w-[380px] lg:min-w-[580px] aspect-[16/9] rounded-xl flex flex-row p-8 items-center border border-white/5 overflow-hidden cursor-pointer bg-[#1E1E22]">
      <div className="absolute right-[-13%] top-[20%] opacity-10 pointer-events-none">
        <Image
          src="/icons/tesla_logo.svg"
          width={400}
          height={400}
          alt="tesla_watermark"
          className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
        />
      </div>

      <div className="relative w-1/2 h-full flex flex-col items-start justify-between z-10">
        <Image
          src="/icons/tesla_logo.svg"
          width={110}
          height={134}
          alt="tesla_logo"
          className="w-[70px] h-auto lg:w-[110px]"
        />
        <Image
          src="/assets/car_tesla.png"
          alt="Tesla Red Car"
          width={350}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col h-3/4 items-center justify-end pl-4 gap-4 z-10">
        <button className="absolute top-6 right-6 flex items-center gap-1.5 bg-orange text-white text-xs px-3 py-1 rounded-full uppercase font-roboto font-medium tracking-widest z-20">
          <span>Announcement</span>
          <Image
            src="/icons/info_icon.svg"
            width={12}
            height={12}
            alt="info"
            className="brightness-200"
          />
        </button>

        <div className="flex flex-col items-center gap-2">
          <Image
            src="/icons/announcement_icon.svg"
            alt="announcement"
            width={127}
            height={17}
          />
          <span className="text-white text-xs lg:text-base font-medium font-montserrat">
            Supercharger
          </span>
          <span className="text-white text-xs lg:text-base font-medium font-montserrat">
            Technology
          </span>
        </div>

        <button className="flex items-center gap-2 bg-crimson hover:bg-red-700 text-white lg:px-6 lg:py-2 p-1 transition-colors">
          <span className="underline text-xs lg:text-base text-mulish font-normal uppercase tracking-widest">
            learn more
          </span>
          <Image
            src="/icons/arrow_rigth_icon.svg"
            alt="arrow"
            width={13}
            height={13}
          />
        </button>
      </div>
    </div>
  );
}
