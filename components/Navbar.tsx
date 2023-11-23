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
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container>
      <nav className="pt-[60px] pb-[40px]">
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-left md:items-center">
          <div>
            <h2 className={` ${cinzelDecorative.className}`}>
              <Link href="/" className="flex flex-col">
                <span className="text-4xl">Landressa</span>
                <span className="text-2xl lg:text-end">Schiefelbein</span>
              </Link>
            </h2>
          </div>
          <div className="hidden sm:flex ">
            <div className="hidden sm:flex md:gap-6 my-5">
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
          <div className="hidden sm:flex gap-3 items-center md:justify-center">
            <Link
              href="https://whatsa.me/5555997073688/?t=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
              target="_blank"
            >
              <Whatsapp className="hover:text-myBlueHover" />
            </Link>
            <Link
              href="https://www.instagram.com/landressasch/"
              target="_blank"
            >
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
          <div
            onClick={handleNav}
            className="absolute top-16 right-10 sm:hidden "
          >
            {menuOpen ? <></> : <Menu />}
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[70%] sm:hidden h-screen bg-myBlack/90 p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 !ease-in-out duration-1000"
          }
        >
          <div onClick={handleNav} className="pt-6 sm:hidden text-myWhite">
            {menuOpen ? (
              <Close className="absolute top-16 right-10 sm:hidden " />
            ) : (
              <></>
            )}
            <div className="flex flex-col my-3">
              {navigationLinks.map((link, index) => (
                <Link
                  href={link.path[0]}
                  key={index}
                  className="py-2 border-b-2 text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex justify-evenly mt-10">
              <Link
                href="https://whatsa.me/5555997073688/?t=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
                target="_blank"
              >
                <Whatsapp className="hover:text-myBlueHover" />
              </Link>
              <Link
                href="https://www.instagram.com/landressasch/"
                target="_blank"
              >
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
        </div>
      </nav>
    </Container>
  );
};
