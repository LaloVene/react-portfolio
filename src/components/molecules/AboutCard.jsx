import React from "react";
import { Card } from "@heroui/react";
import Button from "../atoms/Button.atom";
import Pdf from "../../assets/Resume.pdf";

function AboutCard() {
  return (
    <Card
      className="max-w-[35rem] rounded-xl border-divider bg-content1 shadow-[0_12px_80px_rgba(0,0,0,0.07)] dark:shadow-[0_12px_80px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_16px_90px_rgba(0,0,0,0.1)]"
    >
      <Card.Content className="p-6">
        <p className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
          I am a Data Engineer and AI Researcher specializing in advanced data
          retrieval pipelines and autonomous AI orchestration.
        </p>
        <div className="mt-4">
          <Button
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer"
            color="red"
          >
            Download CV
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default AboutCard;
