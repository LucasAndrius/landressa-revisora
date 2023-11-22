import { ButtonLink } from "./ButtonLink";
import Container from "./Container";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export const Quot = () => {
  return (
    <Container>
      <div className="py-[50px]" id="quot">
        <h2 className={`font-semibold text-3xl mb-12 ${yeseva.className}`}>
          Vamos trabalhar juntos!
        </h2>
        <div className="lg:flex">
          <div className="lg:w-1/2 h-auto flex justify-center md:w-full md:mb-10">
            <div className=" bg-myPink w-80 p-5 rounded-3xl border-r-8 border-t-8 border-myBlue">
              <h3
                className={`text-center font-semibold text-xl ${yeseva.className}`}
              >
                Plano 1 <br />
                Formata pra mim
              </h3>
              <ul className="list-disc p-7">
                <li className="pt-2">Capa e contracapa</li>
                <li className="pt-2">Dedicatória, agradecimentos e epígrafe</li>
                <li className="pt-2">Resumo e abstract</li>
                <li className="pt-2">
                  Lista de ilustrações, tabelas, abreviaturas e símbolos
                </li>
                <li className="pt-2">Sumário eletrônico</li>
                <li className="pt-2">Títulos e subtítulos</li>
                <li className="pt-2">Citação direta e indireta</li>
                <li className="pt-2">
                  Nota de rodapé Referências Apêndice e anexo
                </li>
              </ul>
              <ButtonLink link="" label="quero este" />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center md:w-full">
            <div className=" bg-myPink w-80 p-5 rounded-3xl border-r-8 border-t-8 border-myBlue">
              <h3
                className={`text-center font-semibold text-xl ${yeseva.className}`}
              >
                Plano 2 <br />
                Revisão + Formata pra mim
              </h3>
              <ul className="list-disc p-7">
                <li className="pt-2">Acentuação</li>
                <li className="pt-2">Pontuação</li>
                <li className="pt-2">Colocação pronomial</li>
                <li className="pt-2">Novo acordo ortográfico</li>
                <li className="pt-2">Coesão, coerência e clareza</li>
                <li className="pt-2">Concordância e regência</li>
                <li className="pt-2">Repetição vocabular</li>
                <li className="pt-2">Erros de digitação</li>
              </ul>
              <p className={yeseva.className}>
                <span className="font-bold">+</span> Plano 1 Formata pra mim
              </p>
              <ButtonLink link="" label="quero este" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
