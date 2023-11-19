import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-myWhite container flex flex-col py-10 px-24 rounded-3xl min-h-screen">
      <main>
        <Navbar />
        <div>...</div>
      </main>
    </div>
  );
}
