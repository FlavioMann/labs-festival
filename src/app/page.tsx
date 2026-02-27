import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/header/header";
import ExclusiveContent from "@/components/sections/ExclusiveContent";
import FeaturedBanner from "@/components/sections/FeaturedBanner";
import FeaturedBannerDigital from "@/components/sections/FeaturedBannerDigital";
import GenreMusicalFestival from "@/components/sections/GenreMusicalFestival";
import InLive from "@/components/sections/InLive";
import LineUp from "@/components/sections/LineUp";
import RockSingers from "@/components/sections/RockSingers";
import WatchAgain from "@/components/sections/WatchAgain";
import YesterdayShows from "@/components/sections/YesterdayShows";
import HeroVideo from "../components/sections/HeroVideo";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-dark">
      <Header />
      <HeroVideo />
      <LineUp />
      <GenreMusicalFestival />
      <FeaturedBanner />
      <InLive />
      <YesterdayShows />
      <ExclusiveContent />
      <RockSingers />
      <FeaturedBannerDigital />
      <WatchAgain />
      <Footer />
    </main>
  );
}
