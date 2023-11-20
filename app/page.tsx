import { About } from "@/components/About";
import { Navbar } from "@/components/Navbar";
import { Quot } from "@/components/Quot";

export default function Home() {
  return (
    <div className="bg-myWhite container flex flex-col py-10 px-24 rounded-3xl min-h-screen">
      <Navbar />
      <main>
        <About />
      </main>
      <Quot />
    </div>
  );
}
