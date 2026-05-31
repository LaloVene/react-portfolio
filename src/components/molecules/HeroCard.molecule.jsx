import React from "react";
import Avatar from "../atoms/Avatar.atom";
import Button from "../atoms/Button.atom";
import SocialMedia from "./SocialMedia.molecule";

function HeroCard() {
  return (
    <div className="text-center text-white p-8 flex flex-col items-center backdrop-blur-xl bg-black/45 border border-white/15 rounded-2xl shadow-2xl max-w-[24rem] mx-4 transition-all duration-300 hover:scale-[1.02]">
      <div className="max-w-[7rem] mb-4">
        <Avatar />
      </div>
      <h1 className="text-3xl font-extrabold m-0 text-white tracking-tight">
        Eduardo Venegas
      </h1>
      <p className="text-base m-0 mt-2 text-neutral-300 font-semibold uppercase tracking-wider">
        Data Engineer
      </p>
      <SocialMedia />
      <div className="mt-2">
        <Button color="red" href="mailto:lalohdez77@gmail.com">
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default HeroCard;
