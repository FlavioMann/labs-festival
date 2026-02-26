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

  // --- Lógica de Arrastar (Drag) ---
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
    const walk = (x - startX) * 2; // Multiplicador de velocidade do scroll
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full pl-6 lg:pl-16">
      {/* Título da Seção */}
      <h2 className="text-white text-h4 font-roboto mb-8">In Live</h2>

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
        {events.map((event) => (
          <LiveEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
