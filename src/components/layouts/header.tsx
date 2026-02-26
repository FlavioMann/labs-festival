"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpenContent, setIsSubMenuOpenContent] = useState(false);
  const [isSubMenuOpenMusical, setIsSubMenuOpenMusical] = useState(false);
  const [isSubMenuOpenUser, setIsSubMenuOpenUser] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSubMenuContent = () =>
    setIsSubMenuOpenContent(!isSubMenuOpenContent);
  const toggleSubMenuMusical = () =>
    setIsSubMenuOpenMusical(!isSubMenuOpenMusical);
  const toggleSubMenuUser = () => setIsSubMenuOpenUser(!isSubMenuOpenUser);

  return (
    <header className="w-full h-16 bg-header-gradient px-6 lg:px-16 py-2 flex items-end fixed top-0 z-50 backdrop-blur-sm">
      <div className="flex flex-row items-end justify-between w-full">
        <div className="flex flex-row items-end">
          <div className="mr-6 lg:mr-10">
            <Image
              src="/icons/header_festival.svg"
              width={160}
              height={47}
              alt="header_festival"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row gap-10">
            <div className="flex flex-row gap-1.5 items-center cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/icons/home_icon.svg"
                width={13}
                height={13}
                alt="home"
              />
              <p className="text-header text-white">Home</p>
            </div>

            <div className="flex flex-row gap-1.5 items-center cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/icons/live_icon_white.svg"
                width={15}
                height={14}
                alt="live"
              />
              <p className="text-header text-white">Live</p>
            </div>

            {/* Musical Styles Desktop */}
            <div className="relative h-full flex items-end">
              <button
                onClick={toggleSubMenuMusical}
                className="flex flex-row gap-1.5 items-center focus:outline-none"
              >
                <Image
                  src="/icons/musical_styles_icon.svg"
                  width={15}
                  height={14}
                  alt="musical"
                />
                <p className="text-header text-white">Musical Styles</p>
                <Image
                  src="/icons/arrow_icon.svg"
                  width={13}
                  height={7}
                  alt="arrow"
                  className={`transition-transform duration-300 ${isSubMenuOpenMusical ? "rotate-180" : ""}`}
                />
              </button>
              {isSubMenuOpenMusical && (
                <div className="absolute top-full left-0 w-48 bg-dark mt-3 shadow-2xl z-[60]">
                  <div className="flex flex-col gap-3 py-4">
                    <div className="px-4">
                      <p className="text-white font-medium">Styles:</p>
                    </div>
                    {["Rock", "Pop", "Funk", "MPB", "Jazz", "Trap", "Rap"].map(
                      (style) => (
                        <a
                          key={style}
                          href="#"
                          className="hover:bg-orange px-4 py-1 text-white font-roboto text-base transition-colors"
                        >
                          {style}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Exclusive Content Desktop */}
            <div className="relative h-full flex items-end">
              <button
                onClick={toggleSubMenuContent}
                className="flex flex-row gap-1.5 items-center focus:outline-none"
              >
                <Image
                  src="/icons/exclusive_content_icon.svg"
                  width={12}
                  height={12}
                  alt="exclusive"
                />
                <p className="text-header text-white">Exclusive Content</p>
                <Image
                  src="/icons/arrow_icon.svg"
                  width={13}
                  height={7}
                  alt="arrow"
                  className={`transition-transform duration-300 ${isSubMenuOpenContent ? "rotate-180" : ""}`}
                />
              </button>
              {isSubMenuOpenContent && (
                <div className="absolute top-full left-0 w-48 bg-dark mt-3 shadow-2xl z-[60]">
                  <div className="flex flex-col gap-3 py-4">
                    <div className="px-4">
                      <p className="text-header text-white font-medium">
                        Content:
                      </p>
                    </div>
                    {[
                      "Back Stage",
                      "Interviews",
                      "Latest News",
                      "Last Editions",
                      "Watch Again",
                    ].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="hover:bg-orange px-4 py-1 text-white font-roboto text-base transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex relative items-end">
            <button
              className="hover:opacity-70 transition-opacity flex items-center gap-2"
              onClick={toggleSubMenuUser}
            >
              <Image
                src="/icons/user_icon.svg"
                width={32}
                height={32}
                alt="user"
              />
              <h6 className="text-h6 text-white font-medium">Peter Parker</h6>
              <Image
                src="/icons/config_icon.svg"
                width={13}
                height={13}
                alt="config"
              />
            </button>
            {isSubMenuOpenUser && (
              <div className="absolute top-full right-0 w-48 bg-dark mt-3 shadow-2xl z-[60]">
                <div className="flex flex-col gap-3 py-4">
                  <div className="px-4">
                    <p className="text-header font-medium text-white">
                      My Profile:
                    </p>
                  </div>
                  <a
                    href="#"
                    className="hover:bg-orange px-4 py-1 text-white font-roboto text-base transition-colors"
                  >
                    Help
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* BOTÃO HAMBÚRGUER (Aparece apenas no mobile) */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* SIDEBAR MOBILE */}
      <div
        className={`fixed inset-0 bg-dark transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0," : "translate-x-full"}`}
      >
        <div className="flex justify-end ">
          <button onClick={toggleMobileMenu}>
            <Image
              src="/icons/close_icon.svg"
              width={30}
              height={30}
              alt="close"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
