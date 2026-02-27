"use client";

import { useRef, useState } from "react";
import { LiveEvent } from "@/types/carrosel";
import { LiveEventCard } from "./LiveEventCard";

interface CarroselLiveProps {
  events: LiveEvent[];
}

export default function CarroselLive({ events }: CarroselLiveProps) {
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
    <section className="w-full pl-6 lg:pl-16">
      <h2 className="text-white text-h4 font-roboto mb-8">In Live</h2>
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
        className={`flex flex-nowrap gap-5 pt-1 pl-1 select-none transition-cursor duration-100 overflow-x-auto lg:overflow-hidden scrollbar-hide overscroll-x-contain ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
        }}
      >
        {events.map((event) => (
          <LiveEventCard key={event.id} event={event} />
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
