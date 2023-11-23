import Image from "next/image";
import landressaImg from "@/public/Landressa Rita Schiefelbein.jpg";
import Container from "./Container";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export const WhatIDo = () => {
  return (
    <Container>
      <div className="py-[50px]">
        <div className="lg:flex gap-10 ">
          <div className="flex flex-col mt-[-15px]  md:items-start md:px-32 lg:px-0 md:w-full md:text-cente lg:w-1/2 lg:text-left r">
            <div className="w-full flex justify-center">
              <Image
                src={landressaImg}
                alt="foto de Landressa"
                className="w-36 h-36 lg:hidden rounded-full mb-10"
              />
            </div>
            <h1 className={`font-semibold text-3xl mb-4 ${yeseva.className}`}>
              Olá, eu sou a Landressa!
              <br />
              Revisora de textos
            </h1>
            <p className="!sm:pb-8 lg:px-0  ">
              Ajudo você na formatação e revisão completa do seu TCC,
              Dissertação e Tese. Também trabalho com artigos acadêmicos para
              revistas e coletâneas.
            </p>
          </div>
          <div className="flex justify-center lg:w-1/2 sm:w-full !sm:my-8 lg:my-0 md:my-8 ">
            <Image
              src={landressaImg}
              alt="foto de Landressa"
              className="hidden  md:h-60 md:w-60 lg:block lg:h-[300px] lg:w-[300px] rounded-ss-[40%] rounded-se-[20%] rounded-ee-[40%] rounded-es-[7%] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
