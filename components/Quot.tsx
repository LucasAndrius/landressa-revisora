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
      <div className="md:px-32 lg:px-0 py-[50px]" id="quot">
        <h2 className={`font-semibold text-3xl mb-12 ${yeseva.className}`}>
          Vamos trabalhar juntos!
        </h2>
        <div className="lg:flex">
          <div className="mb-10 md:w-full lg:w-1/2 h-auto flex justify-center ">
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
              <ButtonLink
                link="https://wa.me/5555997073688?text=Ol%C3%A1%2C+tudo+bem+Landressa%2C+gostaria+de+saber+mais+sobre+o+plano%3A+Plano+1+Formata+pra+mim."
                label="quero este"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center md:w-full h-max">
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
              <ButtonLink
                link="https://wa.me/5555997073688?text=Ol%C3%A1%2C+tudo+bem+Landressa%2C+gostaria+de+saber+mais+sobre+o+plano%3A+Plano+2+Revis%C3%A3o+%2B+Formata+pra+mim."
                label="quero este"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
