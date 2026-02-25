import Image from "next/image";

export const ControlButton = ({ src, alt }: { src: string; alt: string }) => (
  <button className="hover:scale-110 transition-transform opacity-90 hover:opacity-100 flex-shrink-0">
    <Image
      src={src}
      width={48}
      height={48}
      className="w-8 h-8 lg:w-12 lg:h-12"
      alt={alt}
    />
  </button>
);
