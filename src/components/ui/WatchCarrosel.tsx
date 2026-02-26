"use client";

import { useRef, useState } from "react";
import { Announcement, Artist } from "@/types/carrosel";
import { TeslaAdCard } from "./TeslaCard";
import { WatchCard } from "./WatchCard";

type Item = Artist | Announcement;

interface WatchCarroselProps {
  title: string;
  items: Item[];
}

export default function WatchCarrosel({ title, items }: WatchCarroselProps) {
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

  const handleMouseUpOrLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full pb-12 pl-6 lg:px-0 lg:pl-16 bg-dark overflow-hidden">
      <h2 className="text-white text-h4 font-roboto mb-8">{title}</h2>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        className={`flex flex-nowrap gap-6 pl-1 overflow-hidden select-none transition-cursor duration-100 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {items.map((item) => {
          if (item.type === "artist") {
            return (
              <WatchCard
                key={item.id}
                item={item}
                topTitle="Watch Again"
                topSubtitle="Festival"
              />
            );
          }

          if (item.type === "ad" && item.template === "tesla") {
            return <TeslaAdCard key={item.id} />;
          }

          return null;
        })}
      </div>
    </section>
  );
}
