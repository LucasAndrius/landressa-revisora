"use client";
import { ButtonLink } from "@/components/ButtonLink";
import Container from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getProjectLatests } from "@/sanity/sanity.utils";
import { Yeseva_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export default async function Portfolio() {
  const limit = 6;
  const [page, setPage] = useState(0);

  const projects = await getProjectLatests();

  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page - 1);
  };
  const handleNextButton = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className="bg-myPink">
        <Navbar />
      </div>
      <Container>
        <div className="md:mx-32 lg:mx-0 lg:flex my-[40px]">
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
          <div className="lg:w-[50%]">
            <h2
              className={`font-semibold text-3xl pt-16 lg:pt-0 mb-4 ${yeseva.className}`}
            >
              mais abaixo <span className="text-myPinkHover">..</span>
              <span className="text-myPinkHover animate-pulse">.</span>
            </h2>
            <p className="max-w-[280px]">
              Você poderá conferir os livros onde tenho artigos publicados
            </p>
            <ButtonLink link="/portfolio/#publisheForMe" label="veja mais" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] md:mx-32 lg:mx-0 my-[40px]">
          <div className="lg:border-r-4">
            <div>
              <h2
                className={`font-semibold text-3xl lg:pt-0 mb-4 py-5 ${yeseva.className}`}
              >
                5 últimos livros revisados
              </h2>
            </div>
            <div>
              <button onClick={handlePrevButton}>página anterior</button>
              <div>{page}</div>
              <button onClick={handleNextButton}>proxima página</button>
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
                        className="h-48 w-48"
                        quality={100}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="my-10 lg:my-0 lg:mx-10 ">2</div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
