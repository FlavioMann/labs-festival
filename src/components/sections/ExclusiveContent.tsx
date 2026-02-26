import { Announcement, ExclusiveItem } from "@/types/carrosel";
import ExclusiveCarrossel from "../ui/ExclusiveCarrosel";

export default function ExclusiveContent() {
  type ExclusiveCarouselItem = ExclusiveItem | Announcement;
  const exclusiveContent: ExclusiveCarouselItem[] = [
    {
      id: 1,
      type: "exclusive",
      title: "Back Stage",
      image: "/assets/exclusive/backstage.jpg",
    },

    {
      id: 2,
      type: "exclusive",
      title: "Interviews",
      image: "/assets/exclusive/interviews.jpg",
    },
    {
      id: "nike-ad-1",
      type: "ad",
      template: "nike",
    },
    {
      id: 3,
      type: "exclusive",
      title: "Lestest News",
      image: "/assets/exclusive/lestesnews.jpg",
    },
  ];
  return (
    <ExclusiveCarrossel title="Exclusive Content" items={exclusiveContent} />
  );
}
