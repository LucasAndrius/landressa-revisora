import { WhatIDo } from "@/components/WhatIDo";
import { Navbar } from "@/components/Navbar";
import { Quot } from "@/components/Quot";
import { Wave } from "@/components/svg";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <div>
      <div className="bg-myPink">
        <Navbar />
        <main>
          <WhatIDo />
        </main>
      </div>
      <Wave className="w-full h-[250px] text-myPink -z-10" />
      <About />
      <Quot />
      <Portfolio />
    </div>
  );
}
