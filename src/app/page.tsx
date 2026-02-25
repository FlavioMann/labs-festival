import Header from "@/components/layouts/header";
import HeroVideo from "@/components/sections/heroVideo";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Header />

      <HeroVideo />
    </main>
  );
}
