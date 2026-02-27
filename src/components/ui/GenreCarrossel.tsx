"use client";

import { useRef, useState } from "react";
import { GenreCard } from "./GenreCard";
import { Announcement, Genre } from "@/types/carrosel";
import { AppleCard } from "./AppleCard";

type GenreItem = Genre | Announcement;

interface GenreCarrosselProps {
  title: string;
  description?: string;
  items: GenreItem[];
}

export default function GenreCarrossel({
  title,
  description,
  items,
}: GenreCarrosselProps) {
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
    <section className="w-full flex flex-col lg:flex-row bg-brand-dark overflow-hidden lg:pl-16 py-10">
      {(title || description) && (
        <div className="flex flex-col px-6 lg:px-0 shrink-0 justify-start mb-8 lg:mb-0">
          <h2 className="text-white text-h5 font-roboto mb-4">{title}</h2>
          {description && (
            <p className="text-white font-roboto mb-5 max-w-[280px]">
              {description}
            </p>
          )}
          <button className="bg-orange text-white w-fit px-6 py-2 rounded-full font-roboto text-buttonLabel hover:bg-orange/90 transition-colors">
            See All
          </button>
        </div>
      )}

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
        className={`flex flex-nowrap gap-5 pl-6 lg:pl-10 select-none transition-cursor duration-100 overflow-x-auto lg:overflow-hidden scrollbar-hide overscroll-x-contain ${
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
          if (item.type === "genre")
            return <GenreCard key={item.id} genre={item} />;
          if (item.type === "ad" && item.template === "apple")
            return <AppleCard key={item.id} />;
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
