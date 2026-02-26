import { Artist } from "@/types/carrosel";
import Carrossel from "../ui/Carossel";

export default function RockSingers() {
  const lineUpData: Artist[] = [
    {
      type: "artist",
      id: 1,
      name: "Dream Theater",
      image: "/assets/artists/dream_theater.png",
    },
    {
      type: "artist",
      id: 2,
      name: "Måneskin",
      image: "/assets/artists/maneskin.png",
    },
    {
      type: "artist",
      id: 3,
      name: "Coldplay",
      image: "/assets/artists/coldplay.png",
    },
    {
      type: "artist",
      id: 4,
      name: "Offspring",
      image: "/assets/artists/offspring.png",
    },
    {
      type: "artist",
      id: 5,
      name: "Avril Lavigne",
      image: "/assets/artists/avril_lavigne.png",
    },
    {
      type: "artist",
      id: 6,
      name: "Black Pantera",
      image: "/assets/artists/black_pantera.png",
    },
    {
      type: "artist",
      id: 7,
      name: "Ed Sheeron",
      image: "/assets/artists/ed_sheeron.jpg",
    },
  ];

  return (
    <section>
      <Carrossel items={lineUpData} title="Rock Singers" />
    </section>
  );
}
