import Link from "next/link";

type Props = {
  link: string;
  label: string;
};

export const ButtonLink = (props: Props) => {
  return (
    <Link href={props.link} className="">
      <div className="hover:animate-pulse px-4 py-4 my-4 text-center font-semibold rounded-lg bg-myBlue">
        {props.label}
      </div>
    </Link>
  );
};
