import { ButtonLink } from "./ButtonLink";

export const Quot = () => {
  return (
    <div className="my-14">
      <div className="text-center mb-12">
        <h2 id="quot" className="lg:text-4xl font-semibold">
          Vamos trabalhar juntos
        </h2>
      </div>
      <div className="lg:flex lg:gap-20 lg:justify-center">
        <div className="lg:w-80 min-h-[500px] bg-myBlack text-myWhite rounded-2xl">
          <h3 className="text-center py-7">
            <span className="font-bold">Plano 1</span>
            <br />
            Formata pra mim
          </h3>
          <ul className="px-10 mb-6 text-sm list-disc">
            <li className="py-1">Capa e contracapa</li>
            <li className="py-1">Dedicatória, agradecimentos e epígrafe</li>
            <li className="py-1">Resumo e abstract</li>
            <li className="py-1">
              Lista de ilustrações, tabelas, abreviaturas e símbolos
            </li>
            <li className="py-1">Sumário eletrônico</li>
            <li className="py-1">Títulos e subtítulos</li>
            <li className="py-1">Citação direta e indireta</li>
            <li className="py-1">Nota de rodapé</li>
            <li className="py-1">Referências</li>
            <li className="py-1">Apêndice e anexo</li>
          </ul>
          <div className="text-center ">
            <ButtonLink link="" label="Quero este" />
          </div>
        </div>
        <div className="lg:w-80 bg-myBlack text-myWhite rounded-2xl">
          <h3 className="text-center py-7">
            <span className="font-bold">Plano 2</span>
            <br />
            Revisão <span className="text-myPink font-bold text-xl">
              +
            </span>{" "}
            Formata pra mim
          </h3>
          <ul className="px-10 mb-6 text-sm list-disc">
            <li className="py-1">Acentuação</li>
            <li className="py-1">Pontuação</li>
            <li className="py-1">Colocação pronomial</li>
            <li className="py-1">Novo acordo ortográfico</li>
            <li className="py-1">Coesão, coerência e clareza</li>
            <li className="py-1">Concordância e regência</li>
            <li className="py-1">Repetição vocabular</li>
            <li className="py-1">Erros de digitação</li>
            <li className="py-1">
              <span className="text-myPink font-bold">
                + Plano 1 Formata pra mim
              </span>
            </li>
          </ul>
          <div className="text-center ">
            <ButtonLink link="" label="Quero este" />
          </div>
        </div>
      </div>
    </div>
  );
};
