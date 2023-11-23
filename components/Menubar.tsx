"use client";
import { useState } from "react";
import { Close, Instagram, Menu, Whatsapp } from "./svg";
import { navigationLinks } from "@/utils/data";
import Link from "next/link";
import { Cinzel_Decorative } from "next/font/google";
import { Yeseva_One } from "next/font/google";
import Container from "./Container";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export const Menubar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <Container>
      <nav className="w-full bg-myPink fixed top-0 left-400 right-0 z-20">
        <div>
          <h2 className={` ${cinzelDecorative.className}`}>
            <Link href="/" className="flex flex-col">
              <span className="text-4xl">Landressa</span>
              <span className="text-2xl lg:text-end">Schiefelbein</span>
            </Link>
          </h2>
        </div>
        <div className="justify-between px-4 mx-auto lg:max-w-3xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <Close /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              {navigationLinks.map((link, index) => (
                <Link href={link.path[0]} key={index}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
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
      </nav>
    </Container>
  );
};
