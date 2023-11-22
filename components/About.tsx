import { ButtonLink } from "./ButtonLink";
import Container from "./Container";
import { BookUndraw } from "./svg";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export const About = () => {
  return (
    <Container>
      <div className="lg:flex lg:items-center mt-[-260px] py-[50px]">
        <div className="w-1/2">
          <BookUndraw className="w-[350px] h-auto text-myBlue" />
        </div>
        <div className="w-1/2 lg:flex lg:flex-col gap-2">
          <h2 className={`font-semibold text-3xl mb-4 ${yeseva.className}`}>
            Sobre mim
          </h2>
          <p>
            Olá, me chamo Landressa! Sou formada em Filosofia (UFPel) <br />e
            curso Letras - Revisão e Redação de Texto (UFPel).
          </p>
          <p>
            Trabalho com revisão de textos acadêmicos há três anos. Como parte
            do trabalho, faço adequação de textos à linguagem acadêmica,
            ortografia, gramática, corerência e coesão, bem como formatação
            ABNT.
          </p>
          <ButtonLink link="/portfolio" label="saiba mais..." />
        </div>
      </div>
    </Container>
  );
};
