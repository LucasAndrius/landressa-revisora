import Container from "@/components/Container";
import Image from "next/image";
import landressaImg from "@/public/Landressa Rita Schiefelbein.jpg";
import { getMyLinks } from "@/sanity/sanity.utils";
import Link from "next/link";

export default async function MyLinks() {
  const links = await getMyLinks();
  return (
    <div className="bg-myBlack min-h-[100vh] overflow-hidden ">
      <Container>
        <div className="pt-16 pb-8">
          <div className="w-full flex justify-center">
            <Image
              src={landressaImg}
              alt="foto de Landressa"
              className="w-36 h-36 rounded-full mb-10 border-2 border-myBlue"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-16">
          {links.map((link) => (
            <ul
              key={link._id}
              className="overflow-x-hidden overflow-y-auto font-bold"
            >
              <Link href={link.url}>
                <li className="text-center bg-myWhite my-2 py-2 px-12 rounded-2xl w-[250px] md:w-[320px] lg:w-[480px] hover:text-myBlueHover">
                  {link.name}
                </li>
              </Link>
            </ul>
          ))}
        </div>
      </Container>
    </div>
  );
}
