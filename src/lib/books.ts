export type Book = {
  title: string;
  status: "Coming soon" | "Available";
  description: string;
  expectedRelease: string;
};

export const books: Book[] = [
  {
    title: "Storyverse: Book One",
    status: "Coming soon",
    description:
      "A high-energy adventure that kicks off the Storyverse with bold stakes and fan-favourite characters.",
    expectedRelease: "Late 2026",
  },
];
