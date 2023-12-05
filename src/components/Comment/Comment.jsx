import { Flex, Avatar, Text } from "@chakra-ui/react";

const Comment = ({ createdAt, userName, profilePic, text }) => {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name={userName} size={"sm"} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={12}>
            {userName}
          </Text>
          <Text fontSize={14}>{text}</Text>
          <Text fontSize={12} color={"gray"}>
            {createdAt}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Comment;
