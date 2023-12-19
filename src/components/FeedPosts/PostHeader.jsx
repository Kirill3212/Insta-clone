import { Link } from "react-router-dom";

import useFollowUser from "../../hooks/useFollowUser";

import { timeAgo } from "../../utils/timeAgo";

import {
  Flex,
  Box,
  Avatar,
  Button,
  SkeletonCircle,
  Skeleton,
  VStack,
} from "@chakra-ui/react";

const PostHeader = ({ post, profileCreator }) => {
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(
    post.createdBy
  );

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {profileCreator ? (
          <>
            {" "}
            <Link to={`/${profileCreator.userName}`}>
              <Avatar
                src={profileCreator.profilePicURL}
                alt="profile img"
                size={"sm"}
              />
            </Link>
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
              <Link to={`/${profileCreator.userName}`}>
                {profileCreator.userName}
              </Link>
              <Box color={"gray.500"}>{timeAgo(post.createdAt)}</Box>
            </Flex>
          </>
        ) : (
          <Flex gap={2} alignItems={"center"}>
            <SkeletonCircle size={10} />
            <VStack gap={2} alignItems={"flex-start "}>
              <Skeleton height={"10px"} w={"200px"}></Skeleton>
            </VStack>
          </Flex>
        )}
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
          size={"xs"}
          bg={"transparent"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
