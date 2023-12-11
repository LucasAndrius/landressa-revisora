import { Portfolio } from "@/types/Portfolio";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client.config";

export async function getProjects(): Promise<Portfolio[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "portfolio"] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt[0]->alt,
      url,
      content
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getProject(slug: string): Promise<Portfolio> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "portfolio" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug, next: { revalidate: 600 } }
  );
}

export async function getProjectLatests(): Promise<Portfolio[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "portfolio"] [0..5]{
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { next: { revalidate: 600 } }
  );
}
