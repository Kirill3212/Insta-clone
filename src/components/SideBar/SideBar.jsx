import SideBarItems from "./SideBarItems";

import useLogout from "../../hooks/useLogout";

import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";

import { BiLogOut } from "react-icons/bi";

import { Box, Flex, Link, Tooltip, Button } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const SideBar = () => {
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SideBarItems />
        </Flex>
        {/* LOG OUT */}
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={300}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            display={"flex"}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "flex-start" }}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
          >
            <BiLogOut />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
            >
              Log out
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default SideBar;
