import { WhatIDo } from "@/components/WhatIDo";

import { Quot } from "@/components/Quot";
import { Wave } from "@/components/svg";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <main>
        <div className="bg-myPink">
          <Navbar />
          <WhatIDo />
        </div>
        <Wave className="w-full h-[250px] md:h-[250px] text-myPink -z-10" />
        <About />
        <Quot />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
