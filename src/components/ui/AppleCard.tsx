"use client";

import Image from "next/image";
import Link from "next/link";

export function AppleCard() {
  return (
    <div className="relative min-w-[380px] lg:min-w-[440px] h-52 aspect-[16/9] rounded-xl bg-black flex flex-row p-4 items-center overflow-hidden border border-white/5">
      <div className="absolute top-2 left-4 z-20 pointer-events-none">
        <Image src="/icons/apple_logo.svg" width={20} height={24} alt="apple" />
      </div>

      <div className="absolute top-2 right-4 flex items-center gap-1 bg-orange text-white text-[10px] px-2 py-1 rounded-full uppercase font-roboto font-medium tracking-widest z-20 pointer-events-none">
        <span>Announcement</span>
        <Image
          src="/icons/info_icon.svg"
          width={12}
          height={12}
          alt="info"
          className="brightness-200"
        />
      </div>

      <div className="relative w-1/2 h-full flex items-center z-10">
        <div className="absolute w-44 h-44 bg-white/10 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative flex items-center z-10 pointer-events-none">
          <span className="text-white text-base font-normal font-roboto">
            AirPods
          </span>
          <Image
            src="/assets/airpods_pro.png"
            alt="AirPods"
            width={110}
            height={100}
            className="object-contain"
          />
          <span className="text-white text-base font-normal font-roboto">
            Pro
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 pl-4 text-white z-10 justify-center items-end lg:items-start">
        <div className="space-y-1 text-[10px] font-roboto leading-tight text-right lg:text-left">
          <p>
            <strong className="text-[10px]">24 hrs</strong> of listening time
            with multiple charges
          </p>
          <p>
            <strong className="text-[10px]">4.5 hrs</strong> of listening time
            on one charge
          </p>
          <p>
            <strong className="text-[10px]">1 hr</strong> of listening time on
            only 5 mins of charging
          </p>
        </div>

        <Link
          href="https://www.apple.com/airpods-pro/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white font-bold text-sm  group transition-opacity hover:opacity-80"
        >
          <span className="border-b border-white">buy now</span>
          <Image
            alt="arrow_rigth"
            width={13}
            height={13}
            src="/icons/arrow_rigth_icon.svg"
          />
        </Link>
      </div>
    </div>
  );
}
