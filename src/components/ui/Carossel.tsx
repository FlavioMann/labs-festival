"use client";

import { useRef, useState } from "react";
import { ArtistCard } from "./ArtistCard";
import { TeslaAdCard } from "./TeslaCard";
import { Announcement, Artist } from "@/types/carrosel";

type Item = Artist | Announcement;

interface CarrosselProps {
  title: string;
  items: Item[];
}

export default function Carrossel({ title, items }: CarrosselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleStart = (clientX: number) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(clientX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !scrollRef.current) return;
    const x = clientX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => setIsDragging(false);

  return (
    <section className="w-full py-10 pl-6 lg:px-0 lg:pl-16 bg-brand-dark overflow-hidden">
      <h2 className="text-white text-h4 font-roboto mb-8">{title}</h2>

      <div
        ref={scrollRef}
        onMouseDown={(e) => handleStart(e.pageX)}
        onMouseMove={(e) => {
          if (isDragging) e.preventDefault();
          handleMove(e.pageX);
        }}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].pageX)}
        onTouchMove={(e) => handleMove(e.touches[0].pageX)}
        onTouchEnd={handleEnd}
        className={`flex flex-nowrap gap-5 pl-1 select-none transition-cursor duration-100 overflow-x-auto lg:overflow-hidden scrollbar-hide overscroll-x-contain ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
        }}
      >
        {items.map((item) => {
          if (item.type === "artist") {
            return <ArtistCard key={item.id} artist={item} />;
          }
          if (item.type === "ad" && item.template === "tesla") {
            return <TeslaAdCard key={item.id} />;
          }
          return null;
        })}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
