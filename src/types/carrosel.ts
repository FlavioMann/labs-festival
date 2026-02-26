export type Announcement = {
  type: "ad";
  id: number | string;
  template: "tesla" | "apple" | "nike"; // No futuro, você pode adicionar 'spotify', 'apple', etc.
};

export type Artist = {
  type: "artist";
  id: number;
  name: string;
  image: string;
};

export interface Genre {
  type: "genre";
  id: number;
  name: string;
  gradient: string;
}

export interface LiveEvent {
  type: "live";
  id: number;
  artist: string;
  stage: string;
  date: string;
  time: string;
  image: string;
}

export interface ExclusiveItem {
  id: number | string;
  type: "exclusive";
  title: string;
  image: string;
}
