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

  // --- Lógica de Drag ---
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
    const x = e.pageX - startX;
    const walk = x * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="w-full  pl-6 lg:px-0 lg:pl-16 bg-brand-dark overflow-hidden">
      {/* Título no topo, seguindo o padrão do seu exemplo */}
      <h2 className="text-white text-h4 font-roboto mb-8">{title}</h2>

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
        {items.map((item) => {
          // Renderiza o Card de Conteúdo Exclusivo (Imagem + Watermark)
          if (item.type === "exclusive") {
            return <ExclusiveCard key={item.id} item={item} />;
          }

          // Renderiza o Anúncio da Nike
          if (item.type === "ad" && item.template === "nike") {
            return <NikeAdCard key={item.id} />;
          }

          return null;
        })}
      </div>
    </section>
  );
}
