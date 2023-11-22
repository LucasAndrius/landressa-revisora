import { navigationLinks } from "@/utils/data";
import Link from "next/link";
import { Instagram, Whatsapp } from "./svg";
import Session from "./Container";
import { Cinzel_Decorative } from "next/font/google";
import { Yeseva_One } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export const Navbar = () => {
  return (
    <Session>
      <div className="lg:flex lg:justify-between lg:items-center md:text-center !md:w-screen pt-[60px] pb-[40px]">
        <h2 className={` ${cinzelDecorative.className}`}>
          <Link href="/" className="flex flex-col">
            <span className="text-4xl">Landressa</span>
            <span className="text-2xl lg:text-end">Schiefelbein</span>
          </Link>
        </h2>
        <div>
          <nav className={`flex gap-6 justify-center ${yeseva.className}`}>
            {navigationLinks.map((link, index) => (
              <Link
                href={link.path[0]}
                key={index}
                className="hover:text-myBlueHover"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex gap-3 items-center">
          <Link
            href="https://whatsa.me/5555997073688/?t=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
            target="_blank"
          >
            <Whatsapp className="hover:text-myBlueHover" />
          </Link>
          <Link href="https://www.instagram.com/landressasch/" target="_blank">
            <Instagram className="hover:text-myBlueHover" />
          </Link>
          <Link
            href="http://lattes.cnpq.br/7252092118340697"
            target="_blank"
            className="hover:text-myBlueHover"
          >
            Lattes
          </Link>
        </div>
      </div>
    </Session>
  );
};
