"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-dark py-12 px-6 lg:px-16 border-t border-white/5">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          <div className="max-w-[850px] space-y-2">
            <p className="text-xs text-white leading-relaxed font-roboto">
              Check the Parental Guidance Rating © 2024 WarnerMedia Direct Latin
              America, LLC. All rights reserved. Max is used under license. ©
              2024 Globo Comunicação e Participações S.A. All rights reserved.
              Big Brother Brasil is used under license. The trademarks GLOBO®,
              TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®, OFF®,
              GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®, PREMIERE®,
              and COMBATE® are properties of Globo Comunicação e Participações
              S.A. © 2024 NBCUniversal. All rights reserved. The Universal,
              Studio Universal, and USA Network trademarks are properties of
              NBCUniversal. © 2024 Telecine Programação de Filmes Ltda. All
              rights reserved. The registered trademarks TELECINE® and MEGAPX®
              are properties of Telecine Programação de Filmes Ltda. Paramount+
              © 2024 Paramount. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/header_festival.svg"
                width={160}
                height={47}
                alt="header_festival"
                priority
              />
            </div>
            <p className="text-xs text-white">
              © 2024 Watch Brasil. All rights reserved
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between items-center">
          <div className="flex items-center gap-6">
            <Link
              href="#"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/icons/youtube.svg"
                width={35}
                height={24}
                alt="Youtube"
                className="brightness-200"
              />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/icons/linkedin.svg"
                width={24}
                height={24}
                alt="LinkedIn"
                className="brightness-200"
              />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/icons/instagram.svg"
                width={25}
                height={24}
                alt="Instagram"
                className="brightness-200"
              />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/icons/facebook.svg"
                width={12}
                height={24}
                alt="Facebook"
                className="brightness-200"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@watchtv_brasil?lang=en"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/icons/tiktok.svg"
                width={21}
                height={24}
                alt="TikTok"
                className="brightness-200"
              />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/icons/twiter.svg"
                width={28}
                height={25}
                alt="X"
                className="brightness-200"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#">
              <div className="w-32">
                <Image
                  src="/assets/google_play.png"
                  width={135}
                  height={40}
                  alt="Get it on Google Play"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="w-28">
                <Image
                  src="/assets/app_store.png"
                  width={135}
                  height={40}
                  alt="Download on the App Store"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 pt-8">
        <Link href="#" className="text-base font-roboto text-white font-medium">
          About Labs Festival
        </Link>
        <Link href="#" className="text-base font-roboto text-white font-medium">
          Terms of use and privacy
        </Link>
        <Link href="#" className="text-base font-roboto text-white font-medium">
          Send feedback
        </Link>
      </div>
    </footer>
  );
}
