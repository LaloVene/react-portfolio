import React from "react";
import { Card } from "@heroui/react";
import Button from "../atoms/Button.atom";
import Pdf from "../../assets/resume.pdf";

function AboutCard() {
  return (
    <Card
      className="max-w-[35rem] rounded-xl border-divider bg-content1 transition-all duration-300 
    shadow-[0_0.3px_2.2px_rgba(0,0,0,0.02),0_0.8px_5.3px_rgba(0,0,0,0.028),0_1.5px_10px_rgba(0,0,0,0.035),0_2.7px_17.9px_rgba(0,0,0,0.042),0_5px_33.4px_rgba(0,0,0,0.05),0_12px_80px_rgba(0,0,0,0.07)] 
    dark:shadow-[0_0.3px_2.2px_rgba(0,0,0,0.06),0_0.8px_5.3px_rgba(0,0,0,0.08),0_1.5px_10px_rgba(0,0,0,0.1),0_2.7px_17.9px_rgba(0,0,0,0.15),0_5px_33.4px_rgba(0,0,0,0.2),0_12px_80px_rgba(0,0,0,0.3)] 
    hover:scale-[1.01]"
    >
      <Card.Content className="p-1">
        <p className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
          I am a Data & AI Engineer specializing in agentic RAG, knowledge retrieval, LLM evaluation, and production AI systems.
        </p>
        <div className="mt-4">
          <Button
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer"
            color="danger"
          >
            Download CV
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default AboutCard;
