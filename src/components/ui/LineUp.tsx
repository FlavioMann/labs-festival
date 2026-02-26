"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const lineupData = [
  { id: 1, name: "Iron Maiden", image: "/assets/artists/iron_maiden.png" },
  { id: 2, name: "Alok", image: "/assets/artists/alok.png" },
  { id: 3, name: "Rita Ora", image: "/assets/artists/rita_ora.png" },
  { id: 4, name: "Dream Theater", image: "/assets/artists/dream_theater.png" },
  { id: 5, name: "Dua Lipa", image: "/assets/artists/dua_lipa.png" },
];

export default function LineUp() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full py-10 pl-6 lg:px-0 lg:pl-16 bg-brand-dark overflow-hidden">
      <h2 className="text-white text-h4 font-roboto mb-8">Line Up</h2>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        className={`flex flex-nowrap gap-5 pb-5 pt-1 pl-1 overflow-hidden select-none transition-cursor duration-100 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {lineupData.map((artist) => (
          <div
            key={artist.id}
            className="relative min-w-[208px] lg:min-w-[288px] aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-xl border-[3px] border-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none" />

            <Image
              src={artist.image}
              alt={artist.name}
              fill
              className="object-cover pointer-events-none"
              priority={artist.id <= 3}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-6 z-10 pointer-events-none">
              <span className="text-white font-roboto text-h6 lg:text-h5 font-medium">
                {artist.name}
              </span>
            </div>
          </div>
        ))}
        <div className="relative min-w-[380px] lg:min-w-[580px] aspect-[16/9] rounded-xl flex flex-row p-8 items-center mr-16 border border-white/5 overflow-hidden cursor-pointer">
          <div className="absolute right-[-10%] top-[10%] opacity-10 ">
            <Image
              src="/icons/tesla_logo.svg"
              width={400}
              height={400}
              alt="tesla_watermark"
              className="lg: w-[400px] h-[400px]"
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
                alt="announcement_icon"
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

            <button className="flex items-center gap-2 bg-crimson hover:bg-red-700 text-white lg:px-6 lg:py-2 p-1">
              <span className="underline text-xs lg:text-base text-mulish font-normal uppercase tracking-widest border-b border-transparent">
                learn more
              </span>
              <Image
                src="/icons/arrow_rigth_icon.svg"
                alt="arrow_rigth"
                width={13}
                height={13}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
