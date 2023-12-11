import { Yeseva_One } from "next/font/google";
import Link from "next/link";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  link: string;
  label: string;
};

export const ButtonLink = (props: Props) => {
  return (
    <Link href={props.link} className={yeseva.className}>
      <div className="hover:animate-pulse px-4 py-4 my-4 text-center font-semibold rounded-lg bg-myBlue max-w-[280px]">
        {props.label}
      </div>
    </Link>
  );
};
