"use client";

import { useRef, useState } from "react";
import { ExclusiveCard } from "./ExclusiveCard";
import { Announcement, ExclusiveItem } from "@/types/carrosel";
import { NikeAdCard } from "./NikeCard";

type Item = ExclusiveItem | Announcement;

interface ExclusiveCarrosselProps {
  title: string;
  items: Item[];
}

export default function ExclusiveCarrossel({
  title,
  items,
}: ExclusiveCarrosselProps) {
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
    <section className="w-full pl-6 lg:px-0 lg:pl-16 bg-dark overflow-hidden">
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
        className={`flex flex-nowrap gap-5 pb-5 pt-1 pl-1 select-none transition-cursor duration-100 overflow-x-auto lg:overflow-hidden scrollbar-hide overscroll-x-contain ${
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
          if (item.type === "exclusive")
            return <ExclusiveCard key={item.id} item={item} />;
          if (item.type === "ad" && item.template === "nike")
            return <NikeAdCard key={item.id} />;
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
