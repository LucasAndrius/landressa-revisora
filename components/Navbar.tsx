"use client";
import { navigationLinks } from "@/utils/data";
import Link from "next/link";
import { Close, Instagram, Menu, Whatsapp } from "./svg";
import { Cinzel_Decorative } from "next/font/google";
import { Yeseva_One } from "next/font/google";
import Container from "./Container";
import { useState } from "react";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <Container>
      <div className="lg:flex lg:justify-between lg:items-center md:text-center !md:w-screen pt-[60px] pb-[40px]">
        <h2 className={` ${cinzelDecorative.className}`}>
          <Link href="/" className="flex flex-col">
            <span className="text-4xl">Landressa</span>
            <span className="text-2xl lg:text-end">Schiefelbein</span>
          </Link>
        </h2>
        <div className="">
          <nav
            className={`flex flex-col gap-6 justify-center
            bg-myBlack/95 text-myWhite md:text-myBlack md:bg-transparent absolute md:static top-12 right-5 z-10 rounded-xl 
            md:rounded-none ${yeseva.className}`}
          >
            <div className="flex justify-end md:hidden">
              <button
                className=" p-2 text-myWhite rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Close />
                ) : (
                  <div>
                    <Menu />
                  </div>
                )}
              </button>
            </div>
            <div
              className={` ${
                navbar ? "py-20 px-20 md:py-5 block lg:p-0" : "hidden"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                {navigationLinks.map((link, index) => (
                  <Link
                    href={link.path[0]}
                    key={index}
                    className="hover:text-myBlueHover"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className="flex gap-3 items-center md:justify-center">
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
    </Container>
  );
};
