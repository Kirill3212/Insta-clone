import { Link } from "react-router-dom";

import useLogout from "../../hooks/useLogout";

import useAuthStore from "../../store/authStore";

import { Flex, Avatar, Text, Button } from "@chakra-ui/react";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex
        alignItems={"center"}
        gap={2}
        w={"full"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"} gap={3}>
          <Link to={`${authUser.userName}`}>
            <Avatar size={"md"} src={authUser.profilePicURL} />
          </Link>
          <Link to={`${authUser.userName}`}>
            <Text fontSize={12} fontWeight={"bold"}>
              {authUser.userName}
            </Text>
          </Link>
        </Flex>
        <Button
          size={"xs"}
          background={"transparent"}
          _hover={{ background: "transparent" }}
          to={"/auth"}
          fontSize={14}
          fontWeight={"medium"}
          color={"blue.400"}
          cursor={"pointer"}
          onClick={handleLogout}
          isLoading={isLoggingOut}
        >
          Log out
        </Button>
      </Flex>
    </Flex>
  );
};

export default SuggestedHeader;
