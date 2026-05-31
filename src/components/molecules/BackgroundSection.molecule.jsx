import React from "react";
import ReactMarkdown from "react-markdown";
import { Badge, Box, Group, Text, Title } from "@mantine/core";
import { IconBook, IconBriefcase } from "@tabler/icons-react";

function BackgroundSection({ type, time, title, description, location }) {
  const Icon = type === "Work" ? IconBriefcase : IconBook;

  return (
    <Box>
      <Group gap="0.25rem" align="center">
        <Icon size={24} />
        <Text ml="1rem" c="dimmed">
          {time}
        </Text>
      </Group>
      <Box
        pl="1.8rem"
        ml="0.6rem"
        pb="2rem"
        bdl="3px solid hsla(352, 80%, 50%, 0.5)"
      >
        <Title order={3} py="0.5rem" c="black" fz="1.5rem">
          {title}
        </Title>
        <Badge color="gray">{location}</Badge>
        <Box lh={1.5}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
}

export default BackgroundSection;
