import Header from "@/components/layouts/header";
import HeroVideo from "@/components/sections/heroVideo";
import LineUp from "@/components/ui/LineUp";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-dark">
      <Header />
      <HeroVideo />
      <LineUp />
    </main>
  );
}
