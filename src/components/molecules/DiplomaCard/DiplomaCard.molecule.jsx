import React from "react";
import { Badge, Box, Text } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import Card from "../../atoms/Card/Card.atom.jsx";

function DiplomaCard({ title, date, institution, imageUrl, url }) {
  const goToUrl = () => {
    window.open(url, "_blank");
  };
  return (
    <Card
      onClick={goToUrl}
      style={{ cursor: "pointer", transition: "all 0.2s ease-in-out" }}
    >
      <Box style={{ display: "flex", alignItems: "center" }}>
        <img
          src={imageUrl}
          alt={title}
          style={{
            objectFit: "contain",
            width: "7rem",
            height: "5.5rem",
            borderRadius: "0.5rem",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            backgroundColor: "white",
          }}
        />
        <Box
          ml="1rem"
          w="100%"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Text fw={700} fz="1.3rem" c="black" style={{ minHeight: "3rem" }}>
            {title}
          </Text>
          <Box>
            <Badge color="dark">{institution}</Badge>
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconClock size={13} style={{ marginRight: "0.2rem" }} />
            <Text m={0} fz="0.8rem">
              {date}
            </Text>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default DiplomaCard;
