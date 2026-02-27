"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    id: 1,
    image: "/assets/banner/heineken.jpg",
    link: "https://www.heineken.com/br/pt/pagina-inicial",
    logo: "/icons/heineken_logo.svg",
    logo2: "/icons/text_heineken.svg",
    showStar: true,
    title: "HEINEKEN",
    subtitle: "BORN IN AMSTERDAM",
    extraText: "RAISED BY THE WORD",
    btnText: "GET A TASTE OF AMSTERDAM",
    btnColor: "bg-green",
  },
  {
    id: 2,
    image: "/assets/banner/live_now.jpg",
    link: "https://www.livenowfestival.com/",
    title: "",
    subtitle: "",
    btnText: "LOOK AT THE NEW SHOW",
    btnColor: "bg-[#f17ea1]",
    showStar: false,
  },
  {
    id: 3,
    image: "/assets/banner/coke_diet.webp",
    link: "https://www.coca-cola.com/us/en/brands/diet-coke",
    title: "",
    subtitle: "",
    btnText: "GET A TASTE OF DIET COKE",
    btnColor: "bg-[#ea0000]",
    showStar: false,
  },
];

export default function FeaturedBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="w-full bg-brand-dark px-4 lg:px-16 py-10">
      <div className="bg-white p-3 lg:p-5 rounded-sm shadow-2xl overflow-hidden">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative h-[250px] lg:h-[350px] outline-none"
            >
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-between bg-black/10">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col ">
                    {banner.logo && (
                      <div className="flex flex-col items-start gap-4">
                        <Image
                          src={banner.logo}
                          width={502}
                          height={120}
                          alt="logo"
                        />
                        <div className="pl-12">
                          <Image
                            src={banner.logo2}
                            width={343}
                            height={48}
                            alt="logo"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-end gap-4">
                  <Link
                    href={banner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${banner.btnColor} text-white px-4 py-1.5 flex items-center gap-3 text-sm lg:text-base font-extrabold font-mulish tracking-widest hover:opacity-90 transition-all`}
                  >
                    {banner.btnText}
                    <Image
                      alt="arrow_right"
                      src="/icons/arrow_rigth_icon.svg"
                      width={13}
                      height={13}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
