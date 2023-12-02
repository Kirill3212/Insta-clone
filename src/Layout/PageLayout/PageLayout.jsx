import React from "react";

import SideBar from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

import { Flex, Box } from "@chakra-ui/react";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Flex>
      {/* sidebar on the left */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <SideBar />
        </Box>
      ) : null}

      {/* the page content on the right */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
