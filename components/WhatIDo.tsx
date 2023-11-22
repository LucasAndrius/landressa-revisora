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
    <div className="py-[50px]">
      <Container>
        <div className="lg:flex gap-10">
          <div className="w-1/2">
            <h1 className={`font-semibold text-3xl mb-4 ${yeseva.className}`}>
              Olá, eu sou a Landressa!
              <br />
              Revisora de textos
            </h1>
            <p>
              Ajudo você na formatação e revisão completa do seu TCC,
              Dissertação e Tese. Também trabalho com artigos acadêmicos para
              revistas e coletâneas.
            </p>
          </div>
          <div className="lg:flex justify-center w-1/2">
            <Image
              src={landressaImg}
              alt="foto de Landressa"
              height={300}
              width={300}
              className="lg:rounded-ss-[40%] lg:rounded-se-[20%] lg:rounded-ee-[40%] lg:rounded-es-[7%] rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
