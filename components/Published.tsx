import { getPublished } from "@/sanity/sanity.utils";
import { H2 } from "./Titles/H2";
import Link from "next/link";
import Image from "next/image";

export const Published = async () => {
  const published = await getPublished();
  return (
    <div id="lastReviewed" className="py-10">
      <H2 name="Últimos artigos publicados" />
      <div>
        <div className="flex gap-6 flex-wrap justify-center md:justify-start">
          {published.map((project) => (
            <div key={project._id}>
              {project.image && (
                <Link href={project.url} target="_blank">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1241}
                    height={1241}
                    className="h-52 w-52"
                    quality={100}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
