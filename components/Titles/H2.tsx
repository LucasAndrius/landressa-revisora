import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  name: string;
};

export const H2 = (props: Props) => {
  return (
    <h2
      className={`font-semibold text-3xl lg:pt-0 mb-4 py-5 ${yeseva.className}`}
    >
      {props.name}
    </h2>
  );
};
