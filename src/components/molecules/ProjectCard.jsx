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
    <Card className="group relative overflow-hidden flex flex-col items-center justify-center p-6 border-divider bg-content1 shadow-md hover:shadow-xl transition-all duration-300">
      {winnerText && (
        <div
          onClick={goToWinner}
          className="absolute top-4 left-4 z-20 flex items-center cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <div className="bg-black/85 text-amber-400 p-2 rounded-full shadow-lg border border-white/10 flex items-center justify-center">
            <IconTrophy size={18} />
          </div>
          <span className="backdrop-blur-md text-black dark:text-white bg-white/70 dark:bg-black/60 border border-neutral-300 dark:border-neutral-800 text-xs font-bold py-1.5 px-3 rounded-lg -ml-2 shadow-sm">
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
            className="text-xs font-bold font-sans py-0.5 px-1 bg-brand-primary/10 text-brand-primary border-0 rounded-md"
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
