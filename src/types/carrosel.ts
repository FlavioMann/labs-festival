export type Announcement = {
  type: "ad";
  id: number | string;
  template: "tesla" | "apple"; // No futuro, você pode adicionar 'spotify', 'apple', etc.
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
