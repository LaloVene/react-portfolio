import React from "react";
import {
  IconCheck,
  IconEyeglass,
  IconMedal,
  IconTrophy,
} from "@tabler/icons-react";
import Avatar from "../atoms/Avatar.atom";
import AboutCard from "../molecules/AboutCard";
import Accomplishment from "../atoms/Accomplishment.atom";

const accomplishmentList = [
  {
    icon: IconCheck,
    number: "94.60",
    text: "GPA",
  },
  {
    icon: IconMedal,
    number: "4",
    text: "Awarded best GPA",
  },
  {
    icon: IconEyeglass,
    number: "100%",
    text: "Awesome",
  },
  {
    icon: IconTrophy,
    number: "3",
    text: "Hackathon winner",
  },
];

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-[45rem]">
        <div className="w-24 sm:w-28 flex-shrink-0">
          <Avatar />
        </div>
        <AboutCard />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[55rem] mt-10">
        {accomplishmentList.map((item) => (
          <div key={item.text}>
            <Accomplishment
              icon={item.icon}
              number={item.number}
              text={item.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
