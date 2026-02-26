import { Announcement, Genre } from "@/types/carrosel";
import GenreCarrossel from "../ui/GenreCarrossel";

export default function GenreMusicalFestival() {
  const genresData: (Genre | Announcement)[] = [
    {
      id: 1,
      type: "genre",
      name: "Rock",
      gradient: "bg-gradient-to-b from-[#2433C0] to-[#4F60FF]",
    },
    {
      id: 2,
      type: "genre",
      name: "Pop",
      gradient: "bg-gradient-to-b from-[#06DE03] to-[#016500]",
    },
    { id: "ad-apple", type: "ad", template: "apple" },
    {
      id: 3,
      type: "genre",
      name: "Funk",
      gradient: "bg-gradient-to-b from-[#AF01CA] to-[#5E006C]",
    },
    {
      id: 4,
      type: "genre",
      name: "Jazz",
      gradient: "bg-gradient-to-b from-[#FF6100] to-[#BF4900]",
    },
  ];

  return (
    <section>
      <GenreCarrossel
        items={genresData}
        title="Festival for you"
        description="Explore your favorite genres and discover new rhythms to love!"
      />
    </section>
  );
}
