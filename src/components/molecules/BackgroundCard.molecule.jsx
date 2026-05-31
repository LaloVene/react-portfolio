import React from "react";
import { Card } from "@heroui/react";
import BackgroundSection from "./BackgroundSection.molecule";

function BackgroundCard({ type, data }) {
  return (
    <Card className="p-4 rounded-xl border border-divider bg-content1 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-3xl font-bold uppercase text-neutral-300 dark:text-neutral-600 text-center py-4 tracking-[0.5rem] select-none">
        {type}
      </div>
      <Card.Content className="p-4">
        {data.map((item, index) => {
          return (
            <BackgroundSection
              key={item.title}
              type={type}
              title={item.title}
              location={item.location}
              time={item.time}
              description={item.description}
              isLast={index === data.length - 1}
            />
          );
        })}
        <div className="h-6 w-6 bg-brand-danger rounded-full shadow-lg shadow-brand-danger/30" />
      </Card.Content>
    </Card>
  );
}

export default BackgroundCard;
