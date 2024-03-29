import { Portfolio } from "@/types/Portfolio";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client.config";
import { myLinks } from "@/types/MyLinks";

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

export async function getLastReviewedBookName(): Promise<Portfolio[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "portfolio"] | order(_createdAt desc) {
      _id,
      name,
      url,
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
    groq`*[_type == "portfolio"] | order(_createdAt desc) [0..5] {
      _id,
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

export async function getMyLinks(): Promise<myLinks[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "myLinks"] | order(_createdAt) {
      _id,
      _createdAt,
      name,
      "image": image.asset->url,
      "alt": image.alt[0]->alt,
      url,
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getPublished(): Promise<Portfolio[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "published"] | order(_createdAt desc) [0..8] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt[0]->alt,
      url,
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getBlogPosts(): Promise<Portfolio[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "posts"] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "cover": image.asset->url,
      "alt": image.alt[0]->alt,
      url,
      content,
      categories[],
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getBlogPost(slug: string): Promise<Portfolio> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "posts" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "cover": image.asset->url,
      url,
      content,
      categories[],
    }`,
    { slug, next: { revalidate: 600 } }
  );
}
