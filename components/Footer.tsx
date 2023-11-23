import Container from "./Container";
import { Copyright } from "./svg";

export const Footer = () => {
  return (
    <Container>
      <div className="flex mb-10 gap-1 items-center justify-center text-sm md:text-base">
        <Copyright className="hover:text-myPinkHover" />
        <p>2023 todos os direitos reservados</p>
      </div>
    </Container>
  );
};
