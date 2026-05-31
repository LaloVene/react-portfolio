import React from "react";
import { Chip } from "@heroui/react";
import { IconClock } from "@tabler/icons-react";
import Card from "../atoms/Card.atom.jsx";

function DiplomaCard({ title, date, institution, imageUrl, url }) {
  const goToUrl = () => {
    window.open(url, "_blank");
  };
  return (
    <Card
      onClick={goToUrl}
      className="cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-divider hover:border-brand-primary bg-content1"
    >
      <div className="flex flex-row items-center gap-4">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain w-28 h-22 rounded-lg bg-white shadow-sm border border-neutral-100 p-1 flex-shrink-0"
        />
        <div className="flex flex-col w-full min-h-[5.5rem] justify-between">
          <p className="font-bold text-lg text-neutral-900 dark:text-neutral-100 leading-snug line-clamp-2">
            {title}
          </p>
          <div className="flex flex-col gap-1.5 mt-2">
            <div>
              <Chip
                size="sm"
                color="default"
                className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black font-semibold text-xs py-0.5 px-1.5 h-auto rounded"
              >
                {institution}
              </Chip>
            </div>
            <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
              <IconClock size={14} />
              <span className="text-xs font-semibold">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DiplomaCard;
