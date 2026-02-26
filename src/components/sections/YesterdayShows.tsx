import { Announcement, Artist } from "@/types/carrosel";
import Carrossel from "../ui/Carossel";

export default function YesterdayShows() {
  const yesterdayShowsData: (Artist | Announcement)[] = [
    {
      type: "artist",
      id: 1,
      name: "Marshmello",
      image: "/assets/artists/marshmello.png",
    },
    {
      type: "artist",
      id: 2,
      name: "Alok",
      image: "/assets/artists/alok.png",
    },
    {
      type: "artist",
      id: 3,
      name: "Rita Ora",
      image: "/assets/artists/rita_ora.png",
    },
    {
      type: "artist",
      id: 4,
      name: "Dream Theater",
      image: "/assets/artists/dream_theater.png",
    },
    {
      type: "artist",
      id: 5,
      name: "Dua Lipa",
      image: "/assets/artists/dua_lipa.png",
    },
    {
      type: "artist",
      id: 6,
      name: "Maneskin",
      image: "/assets/artists/maneskin.png",
    },
  ];

  return (
    <section>
      <Carrossel items={yesterdayShowsData} title="Yesterday Shows" />
    </section>
  );
}
