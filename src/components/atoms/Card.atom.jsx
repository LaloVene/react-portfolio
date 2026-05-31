import React from "react";
import { Card as HeroCard } from "@heroui/react";

function Card({ children, className = "", ...props }) {
  return (
    <HeroCard
      isBordered
      className={`p-4 rounded-xl shadow-md border-divider hover:shadow-lg transition-shadow duration-300 bg-content1 ${className}`}
      {...props}
    >
      {children}
    </HeroCard>
  );
}

export default Card;
