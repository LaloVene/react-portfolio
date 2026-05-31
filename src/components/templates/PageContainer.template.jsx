import React from "react";
import { Box } from "@mantine/core";
import Header from "../organisms/Header.organism";
import Footer from "../organisms/Footer.organism";

function PageContainer({ children }) {
  return (
    <Box>
      <Box>
        <Header />
        <Box maw={1800} mx="auto" p="1rem">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default PageContainer;
