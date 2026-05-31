import React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import HeroCard from "../molecules/HeroCard.molecule";
import BackgroundImage from "../../assets/hero-background3.jpeg";

function Hero() {
  return (
    <section
      className="relative w-full h-[70vh] flex flex-col justify-center items-center rounded-2xl shadow-xl overflow-hidden mt-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroCard />
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-neutral-300 font-bold select-none">
        <span className="text-xs uppercase tracking-widest mb-1.5 opacity-80">
          Scroll Down
        </span>
        <div className="animate-bounce">
          <IconChevronDown size={28} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
