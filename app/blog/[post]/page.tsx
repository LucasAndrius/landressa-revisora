import Container from "@/components/Container";
import { getBlogPost } from "@/sanity/sanity.utils";
import Image from "next/image";

type Props = {
  params: {
    post: string;
  };
};

export default async function ({ params }: Props) {
  const slug = params.post;
  const post = await getBlogPost(slug);
  return (
    <Container>
      <div>{post.name}</div>
      <div>{post.slug}</div>
      <div>teste</div>
      {post.image && (
        <div>
          <Image src={post.image} alt={post.name} width={100} height={100} />
        </div>
      )}

      <div></div>
    </Container>
  );
}
