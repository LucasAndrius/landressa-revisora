import Container from "@/components/Container";
import { getBlogPosts } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <Container>
      <div>meu blog</div>
      <hr />
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            {post.image && (
              <Image
                src={post.image}
                alt={post.name}
                width={750}
                height={300}
              />
            )}
            <div>
              <h4>{post.name}</h4>
            </div>
            <div>
              <PortableText value={post.content} />
            </div>
          </div>
        ))}
        <hr />
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </div>
    </Container>
  );
}
