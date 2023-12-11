import { PortableTextBlock } from "sanity";

export type Portfolio = {
  _id: string;
  _createdAt: Date;
  name: string;
  description: PortableTextBlock[];
  slug: string;
  image: string;
  alt: string;
  url: string;
  content: PortableTextBlock[];
};
