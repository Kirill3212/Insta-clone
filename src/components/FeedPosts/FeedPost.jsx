import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

import useGetUserProfileById from "../../hooks/useGetUserProfileById";

import { Box, Image } from "@chakra-ui/react";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
      <PostHeader post={post} profileCreator={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt={"Feed post image"} />
      </Box>
      <PostFooter post={post} profileCreator={userProfile} />
    </>
  );
};

export default FeedPost;
