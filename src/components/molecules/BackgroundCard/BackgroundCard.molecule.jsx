import React from "react";
import { Box, Card, Text } from "@mantine/core";
import BackgroundSection from "../../molecules/BackgroundSection/BackgroundSection.molecule";

function BackgroundCard({ type, data }) {
  return (
    <Card withBorder p="md" radius="md" shadow="none">
      <Card.Section>
        <Text
          fz="2rem"
          fw={700}
          tt="uppercase"
          c="hsl(0, 0%, 80%)"
          ta="center"
          py="1rem"
          lts="0.7rem"
        >
          {type}
        </Text>
      </Card.Section>
      <Card.Section>
        <Box p="1rem">
          {data.map((item) => {
            return (
              <BackgroundSection
                key={item.title}
                type={type}
                title={item.title}
                location={item.location}
                time={item.time}
                description={item.description}
              />
            );
          })}
          <Box
            h="1.5rem"
            w="1.5rem"
            bg="#eb445a"
            style={{ borderRadius: "100%" }}
          />
        </Box>
      </Card.Section>
    </Card>
  );
}

export default BackgroundCard;
