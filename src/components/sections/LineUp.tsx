import { Announcement, Artist } from "@/types/carrosel";
import Carrossel from "../ui/Carossel";

export default function LineUp() {
  const lineUpData: (Artist | Announcement)[] = [
    {
      type: "artist",
      id: 1,
      name: "Iron Maiden",
      image: "/assets/artists/iron_maiden.png",
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
      type: "ad",
      id: "ad-tesla",
      template: "tesla",
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
  ];

  return (
    <section>
      <Carrossel items={lineUpData} title="Line Up" />
    </section>
  );
}
