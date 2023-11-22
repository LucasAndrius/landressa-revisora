import Container from "./Container";
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

import { Yeseva_One } from "next/font/google";
import { Instagram, Whatsapp } from "./svg";
import Link from "next/link";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export const Contact = () => {
  return (
    <Container>
      <div className="lg:flex lg:justify-between md:flex md:justify-between !sm:flex-col  py-[50px]">
        <div>
          <h2 className={`font-semibold text-3xl mb-10 ${yeseva.className}`}>
            Entre em contato
          </h2>
          <div className="flex items-center gap-2 text-xl py-2">
            <Link
              href="https://whatsa.me/5555997073688/?t=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
              target="_blank"
            >
              <Whatsapp className="hover:text-myPinkHover" />
            </Link>
            (55) 997073688
          </div>
          <div className="flex items-center gap-2 text-xl py-2">
            <Link
              href="https://www.instagram.com/landressasch/"
              target="_blank"
            >
              <Instagram className="hover:text-myPinkHover" />
            </Link>
            @landressasch
          </div>
          <div className="flex items-center gap-2 text-xl py-2">
            <span className="hover:text-myPinkHover">@</span>
            contato_landressa@gmail.com
          </div>
        </div>
        <div>
          <h2 className={`${cinzelDecorative.className}`}>
            <Link href="/" className="flex flex-col">
              <span className="text-4xl text-end">Landressa</span>
              <span className="text-2xl text-end">Schiefelbein</span>
            </Link>
          </h2>
          <p className="text-end">revisora de texto</p>
          <p className="w-[200px] text-sm py-5">
            Ajudo você na formatação e revisão completa do seu TCC, Dissertação
            e Tese. Também trabalho com artigos acadêmicos para revistas e
            coletâneas.
          </p>
        </div>
      </div>
    </Container>
  );
};
