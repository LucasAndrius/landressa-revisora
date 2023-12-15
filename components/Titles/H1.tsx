import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  name: string;
};

export const H1 = (props: Props) => {
  return (
    <h1 className={`font-semibold text-3xl mb-4 ${yeseva.className} `}>
      {props.name}
    </h1>
  );
};
