"use client";

import Image from "next/image";
import { useRef } from "react";
import { ControlButton } from "../ui/ControlButton";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 2) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative w-full aspect-video max-h-[85vh] overflow-hidden bg-black hero-video">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero-avril.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-16 mt-16 z-20">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-2xl lg:text-h3 font-roboto">
            Avril Lavigne
          </h1>
          <div className="flex items-center gap-2 text-white font-roboto text-xs lg:text-base opacity-90">
            <span className="text-p2">LIVE</span>
            <span>•</span>
            <span className="text-p2">Sunset</span>
            <span>•</span>
            <span className="text-p2">Singer Camera</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button className="flex items-center gap-2 bg-orange hover:bg-hoverOrange text-white py-2 px-4 lg:px-6 rounded-full transition-all shadow-lg whitespace-nowrap">
            <Image
              src="/icons/camera_icon.svg"
              width={18}
              height={13}
              alt="camera"
            />
            <span className="text-xs lg:text-buttonLabel">
              Choose your camera
            </span>
          </button>

          <div className="flex items-center gap-3 lg:gap-6 pb-1">
            <ControlButton src="/icons/grid_icon.svg" alt="layout" />
            <ControlButton src="/icons/fullscreen_icon.svg" alt="fullscreen" />
            <ControlButton src="/icons/volume_icon.svg" alt="volume" />
            <ControlButton
              src="/icons/settings_player_icon.svg"
              alt="settings"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
