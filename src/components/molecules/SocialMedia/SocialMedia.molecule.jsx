import React from "react";
import { ActionIcon, Box } from "@mantine/core";
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

function HeroCard() {
  return (
    <Box my="1.5rem">
      {socialMedia.map((icon) => (
        <a
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          key={icon.name}
        >
          <ActionIcon
            variant="subtle"
            color="gray"
            size="lg"
            aria-label={icon.name}
            mx="0.5rem"
            c="hsl(0, 0%, 80%)"
          >
            <icon.icon size={22} />
          </ActionIcon>
        </a>
      ))}
    </Box>
  );
}

export default HeroCard;
