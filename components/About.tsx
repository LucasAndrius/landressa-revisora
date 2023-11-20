import Image from "next/image";
import landressaImg from "@/public/Landressa Rita Schiefelbein.jpg";

export const About = () => {
  return (
    <div className="lg:grid lg:grid-cols-[60%_40%] lg:gap-20 lg:my-14">
      <div>
        <h2 className="lg:text-4xl font-semibold">What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <Image
          src={landressaImg}
          alt="foto de Landressa"
          height={280}
          width={280}
          className="rounded-ss-[100px] rounded-se-[50px] rounded-e-[100px] rounded-bl-[20px]"
        />
      </div>
    </div>
  );
};
