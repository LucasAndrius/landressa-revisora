import Container from "./Container";
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

import { Yeseva_One } from "next/font/google";
import { Instagram, Whatsapp } from "./svg";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export const Contact = () => {
  return (
    <Container>
      <div className=" md:mx-32 lg:mx-0 lg:flex lg:justify-between py-[50px]">
        <div>
          <h2
            id="contact"
            className={`font-semibold text-3xl mb-10 ${yeseva.className}`}
          >
            Entre em contato
          </h2>
          <div className="text-sm flex items-center gap-2 md:text-xl py-2">
            <Whatsapp className="" /> (55) 997073688
          </div>
          <div className="text-sm flex items-center gap-2 md:text-xl py-2">
            <Instagram /> @landressasch
          </div>
          <div className="text-sm flex items-center gap-2 md:text-xl py-2">
            <span>@</span> landressas872@gmail.com
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className={`mt-5 flex flex-col ${cinzelDecorative.className}`}>
            <span className="text-4xl text-end">Landressa</span>
            <span className="text-2xl text-end">Schiefelbein</span>
          </h2>
          <p className="w-[200px] text-right">revisora de texto</p>
          <p className="w-[250px] lg:w-[200px] text-sm py-5">
            Ajudo você na formatação e revisão completa do seu TCC, Dissertação
            e Tese. Também trabalho com artigos acadêmicos para revistas e
            coletâneas.
          </p>
        </div>
      </div>
    </Container>
  );
};
