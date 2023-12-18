import Container from "@/components/Container";
import { getBlogPosts } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
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
                width={200}
                height={200}
              />
            )}
            <Link href={`/blog/${post.slug}`}>
              <h4>
                <div>{post.name}</div>
              </h4>

              <hr />
              {/*  <pre>{JSON.stringify(post.slug, null, 2)}</pre> 
            <pre>{JSON.stringify(posts, null, 2)}</pre>*/}

              <PortableText value={post.content} />
            </Link>
            <hr />
          </div>
        ))}
        <hr />
      </div>
    </Container>
  );
}
