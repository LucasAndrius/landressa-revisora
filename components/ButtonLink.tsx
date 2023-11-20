import Link from "next/link";

type Props = {
  link: string;
  label: string;
};

export const ButtonLink = (props: Props) => {
  return (
    <Link href={props.link} className="px-16 py-4 rounded-lg bg-myPink">
      {props.label}
    </Link>
  );
};
