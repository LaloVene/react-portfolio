import React from "react";
import { Button } from "@heroui/react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const socialMedia = [
  {
    name: "Github",
    icon: IconBrandGithub,
    url: "https://github.com/LaloVene",
  },
  {
    name: "Linkedin",
    icon: IconBrandLinkedin,
    url: "https://www.linkedin.com/in/eduardo-venegas/",
  },
];

function SocialMedia() {
  return (
    <div className="my-6 flex flex-row gap-4 justify-center">
      {socialMedia.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          key={social.name}
          aria-label={social.name}
          className="transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <Button
            isIconOnly
            variant="light"
            size="md"
            className="text-neutral-400 hover:text-white dark:text-neutral-500 dark:hover:text-white bg-transparent hover:bg-white/10 rounded-full border border-transparent hover:border-white/20 p-2"
          >
            <social.icon size={24} />
          </Button>
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
