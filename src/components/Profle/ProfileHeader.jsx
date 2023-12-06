import React from "react";

import {
  AvatarGroup,
  Avatar,
  Flex,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar src="/profilepic.jpg" name="Sharlotte" alt="Profile logo" />
      </AvatarGroup>
      <VStack alignItems={"flex-start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        ></Flex>
        <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
          <Text fontSize={{ base: "sm", md: "lg" }}>Charlotte_</Text>
          <Button
            bg={"white"}
            color={"black"}
            _hover={{ bg: "whiteAlpha.800" }}
            size={{ base: "xs", md: "sm" }}
          >
            Edit Profile
          </Button>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              345
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              123
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Charlotte_
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          “The happiness of your life depends upon the quality of your
          thoughts.”
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;