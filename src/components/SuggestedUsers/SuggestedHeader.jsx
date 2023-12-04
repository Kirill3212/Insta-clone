import { Link as RouterLink } from "react-router-dom";

import { Flex, Avatar, Text, Link } from "@chakra-ui/react";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex
        alignItems={"center"}
        gap={2}
        w={"full"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"} gap={3}>
          <Avatar name={"Nikola Tesla"} size={"md"} src="/profilepic.jpg" />
          <Text fontSize={12} fontWeight={"bold"}>
            Charlotte_
          </Text>
        </Flex>
        <Link
          as={RouterLink}
          to={"/auth"}
          fontSize={14}
          fontWeight={"medium"}
          color={"blue.400"}
          style={{ textDecoration: "none" }}
          cursor={"pointer"}
        >
          Log out
        </Link>
      </Flex>
    </Flex>
  );
};

export default SuggestedHeader;
