import { navigationLinks } from "@/utils/data";
import { Caveat } from "next/font/google";
import Link from "next/link";
import { Whatsapp } from "./svg";

const caveat = Caveat({ subsets: ["latin"] });

export const Navbar = () => {
  return (
    <div>
      <div className="lg:h-40 max-w-5xl lg:flex lg:justify-between items-center">
        <h1 className={`text-4xl font-bold ${caveat.className}`}>
          Landressa <br />
          Schiefelbein
        </h1>
        <ul className="lg:flex font-semibold ">
          {navigationLinks.map((link, index) => (
            <li key={index} className="py-2 px-4">
              <Link href={link.path[0]} className="hover:text-myPink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Link
            href="https://whatsa.me/5555997073688/?t=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
            target="_blank"
          >
            <Whatsapp className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};
