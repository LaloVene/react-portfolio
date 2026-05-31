import React from "react";
import ReactMarkdown from "react-markdown";
import { Chip } from "@heroui/react";
import { IconBook, IconBriefcase } from "@tabler/icons-react";

function BackgroundSection({ type, time, title, description, location, isLast }) {
  const Icon = type === "Work" ? IconBriefcase : IconBook;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-3">
        <div className="text-brand-danger dark:text-neutral-300">
          <Icon size={32} />
        </div>
        <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
          {time}
        </span>
      </div>
      <div className={`pl-7 ml-[0.7rem] pb-8 border-solid border-brand-danger/60 border-l-3`}>
        <h3 className="py-2 text-xl font-bold text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <div className="mb-3">
          <Chip
            size="sm"
            variant="flat"
            color="default"
            className="text-xs font-bold text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800"
          >
            {location}
          </Chip>
        </div>
        <div className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed markdown-content">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default BackgroundSection;
