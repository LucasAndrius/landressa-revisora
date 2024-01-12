import { ButtonLink } from "@/components/ButtonLink";
import Container from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { H2 } from "@/components/Titles/H2";
import { getProjectLatests, getProjects } from "@/sanity/sanity.utils";
import { Yeseva_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export default async function Portfolio() {
  const projects = await getProjectLatests();
  const lastReviewedName = await getProjects();

  return (
    <div>
      <div className="bg-myPink">
        <Navbar />
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] md:mx-32 lg:mx-0 my-[40px]">
          <div className="lg:w-[50%]">
            <h1 className={`font-semibold text-3xl mb-4 ${yeseva.className} `}>
              Bem-vindo <br />
              ao meu portfólio
            </h1>
            <p>
              Aqui você pode conferir grande parte dos projetos já publicados
              nos quais atuei como revisora de textos.
            </p>
          </div>
          <div className="">
            <h2
              className={`font-semibold text-3xl pt-16 lg:pt-0 mb-4 ${yeseva.className}`}
            >
              mais abaixo <span className="text-myPinkHover">..</span>
              <span className="text-myPinkHover animate-pulse">.</span>
            </h2>
            <p className="max-w-[280px]">
              Você poderá conferir os livros onde tenho artigos publicados
            </p>
            <ButtonLink link="#lastReviewed" label="veja mais" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] md:mx-32 lg:mx-0 my-[40px]">
          <div className="lg:border-r-4">
            <div id="lastReviewed">
              <H2 name="Últimos livros revisados" />
            </div>
            <div className="flex gap-6 flex-wrap justify-center md:justify-start">
              {projects.map((project) => (
                <div key={project._id}>
                  {project.image && (
                    <Link href={project.url} target="_blank">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1241}
                        height={1241}
                        className="h-44 w-44"
                        quality={100}
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="my-10 lg:my-0 lg:mx-10 ">
            <div>
              <H2 name="Demais livros" />
            </div>
            <div className="!max-h-[375px] max-w-[250px] overflow-x-hidden overflow-y-auto pr-10 ">
              {lastReviewedName.map((book) => (
                <ul key={book._id}>
                  <hr className="border-myBlueHover" />
                  <li className="py-1 text-sm">
                    <a href={book.url} target="_blank">
                      {book.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
