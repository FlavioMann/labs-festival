import { Announcement, Artist } from "@/types/carrosel";
import WatchCarrosel from "../ui/WatchCarrosel";

export default function WatchAgain() {
  const watchListData: (Artist | Announcement)[] = [
    {
      id: 1,
      type: "artist",
      name: "Alok",
      image: "/assets/artists/alok.png",
    },
    {
      id: 2,
      type: "artist",
      name: "Rita Ora",
      image: "/assets/artists/rita_ora.png",
    },
    {
      type: "ad",
      id: "ad-tesla",
      template: "tesla",
    },
    {
      id: 3,
      type: "artist",
      name: "Dua Lipa",
      image: "/assets/artists/dua_lipa.png",
    },
    {
      id: 4,
      type: "artist",
      name: "Maneskin",
      image: "/assets/artists/maneskin.png",
    },
    {
      id: 5,
      type: "artist",
      name: "Coldplay",
      image: "/assets/artists/coldplay.png",
    },
  ];

  return <WatchCarrosel title="Watch Again" items={watchListData} />;
}
