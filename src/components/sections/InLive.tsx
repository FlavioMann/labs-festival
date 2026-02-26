import CarroselLive from "../ui/CarroselLive";
import { LiveEvent } from "@/types/carrosel";

export default function InLive() {
  const liveEventsData: LiveEvent[] = [
    {
      id: 1,
      type: "live",
      artist: "Demi Lovato",
      stage: "Stage Sunset",
      date: "26.02.26",
      time: "20:00 h",
      image: "/assets/live/demi_lovato.png",
    },
    {
      id: 2,
      type: "live",
      artist: "Justin Bieber",
      stage: "Stage World",
      date: "26.02.26",
      time: "22:00 h",
      image: "/assets/live/justin_bieber.png",
    },
    {
      id: 3,
      type: "live",
      artist: "Post Malone",
      stage: "Stage World",
      date: "26.02.26",
      time: "23:45 h",
      image: "/assets/live/post_malone.png",
    },
    {
      id: 4,
      type: "live",
      artist: "Bruno Mars",
      stage: "Stage Electronic",
      date: "27.02.26",
      time: "01:30 h",
      image: "/assets/live/bruno_mars.png",
    },
  ];
  return (
    <section>
      <CarroselLive events={liveEventsData} />
    </section>
  );
}
