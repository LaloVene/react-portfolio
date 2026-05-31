import React from "react";
import { Chip } from "@heroui/react";
import { IconTrophy } from "@tabler/icons-react";
import Card from "../atoms/Card.atom";
import Button from "../atoms/Button.atom";

function ProjectCard({
  imageUrl,
  title,
  tags,
  githubUrl,
  winnerText,
  winnerLink,
}) {
  const goToWinner = () => {
    window.open(winnerLink, "_blank");
  };

  return (
    <Card className="max-w-[35rem] h-full
    shadow-[0_0.3px_2.2px_rgba(0,0,0,0.02),0_0.8px_5.3px_rgba(0,0,0,0.028),0_1.5px_10px_rgba(0,0,0,0.035),0_2.7px_17.9px_rgba(0,0,0,0.042),0_5px_33.4px_rgba(0,0,0,0.05),0_12px_80px_rgba(0,0,0,0.07)]
    hover:shadow-[0_0.3px_2.2px_rgba(0,0,0,0.02),0_0.8px_5.3px_rgba(0,0,0,0.028),0_1.5px_10px_rgba(0,0,0,0.035),0_2.7px_17.9px_rgba(0,0,0,0.042),0_5px_33.4px_rgba(0,0,0,0.05),0_12px_80px_rgba(0,0,0,0.07)] 
    dark:shadow-[0_0.3px_2.2px_rgba(0,0,0,0.06),0_0.8px_5.3px_rgba(0,0,0,0.08),0_1.5px_10px_rgba(0,0,0,0.1),0_2.7px_17.9px_rgba(0,0,0,0.15),0_5px_33.4px_rgba(0,0,0,0.2),0_12px_80px_rgba(0,0,0,0.3)]">
      {winnerText && (
        <div
          onClick={goToWinner}
          className="absolute top-4 left-4 z-20 flex items-center cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <span className="backdrop-blur-md text-black dark:text-white bg-white/70 dark:bg-black/60 border border-neutral-300 dark:border-neutral-800 text-xs font-bold py-1.5 px-3 rounded-lg -ml-1 shadow-sm flex items-center justify-center gap-2">
          <div className="bg-black/85 text-amber-400 p-2 rounded-full shadow-lg border border-white/10 flex items-center justify-center">
            <IconTrophy size={18} />
          </div>
            {winnerText}
          </span>
        </div>
      )}

      {/* Image container with hover scaling */}
      <div className="w-full h-64 rounded-xl overflow-hidden flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 border border-divider">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain h-full w-full rounded-xl p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 my-4 text-center">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-1.5 mb-6 max-w-full">
        {tags.map((tag) => (
          <Chip
            key={tag}
            size="sm"
            variant="flat"
            color="primary"
            className="text-xs py-0.5 px-1 bg-brand-tertiary/10 text-brand-tertiary border-0 rounded-md"
          >
            {tag}
          </Chip>
        ))}
      </div>

      <div className="mt-auto w-full flex justify-center">
        <Button href={githubUrl} target="_blank" color="dark">
          View Project
        </Button>
      </div>
    </Card>
  );
}

export default ProjectCard;
