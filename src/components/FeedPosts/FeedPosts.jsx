import useGetFeedPosts from "../../hooks/useGetFeedPosts";

import FeedPost from "./FeedPost";

import {
  Container,
  VStack,
  SkeletonCircle,
  Skeleton,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start "}>
                <Skeleton height={"10px"} w={"200px"}></Skeleton>
                <Skeleton height={"10px"} w={"200px"}></Skeleton>
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayuum. Looks like you don&apos;t have any friends.
          </Text>
          <Text color={"red.400"}>Stop coding and go make some!!</Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
