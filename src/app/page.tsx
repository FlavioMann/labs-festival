import Header from "@/components/layouts/header/header";
import ExclusiveContent from "@/components/sections/ExclusiveContent";
import FeaturedBanner from "@/components/sections/FeaturedBanner";
import GenreMusicalFestival from "@/components/sections/GenreMusicalFestival";
import HeroVideo from "@/components/sections/HeroVideo";
import InLive from "@/components/sections/InLive";
import LineUp from "@/components/sections/LineUp";
import YesterdayShows from "@/components/sections/YesterdayShows";

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
    </main>
  );
}
