import React from "react";
import { Badge, Box, Text } from "@mantine/core";
import { IconTrophy } from "@tabler/icons-react";
import Card from "../atoms/Card.atom";
import Button from "../atoms/Button.atom";

function ProjectCard({
  imageUrl,
  title,
  tags,
  githubUrl,
  winnerText,
  winnerLink,
}) {
  const goToWinner = () => {
    window.open(winnerLink, "_blank");
  };

  return (
    <Card>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {winnerText && (
          <Box
            onClick={goToWinner}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <IconTrophy
              style={{
                width: "2rem",
                height: "2rem",
                color: "#ffc107",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                padding: "0.5rem",
                borderRadius: "100%",
              }}
            />
            <Text
              style={{
                backdropFilter: "blur(8px)",
                display: "flex",
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                border: "2px solid rgba(0, 0, 0, 0.8)",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                marginLeft: "-0.5rem",
              }}
            >
              {winnerText}
            </Text>
          </Box>
        )}
        <Box
          style={{
            height: "16rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              objectFit: "contain",
              height: "100%",
              borderRadius: "1rem",
            }}
          />
        </Box>
        <Text c="black" fz="1.2rem" fw={700} my="1rem">
          {title}
        </Text>
        <Box mb="2rem">
          {tags.map((tag) => (
            <Badge variant="light" color="indigo" key={tag} mr={4} mb={4}>
              {tag}
            </Badge>
          ))}
        </Box>
        <Button href={githubUrl} target="_blank" color="dark">
          View Project
        </Button>
      </Box>
    </Card>
  );
}

export default ProjectCard;
