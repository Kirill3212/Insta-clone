import { useState, useRef } from "react";

import usePostComment from "../../hooks/usePostComment";
import useLikePost from "../../hooks/useLikePost";

import { timeAgo } from "../../utils/timeAgo";

import useAuthStore from "../../store/authStore";

import {
  Flex,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

const PostFooter = ({ post, isProfilePage, profileCreator }) => {
  const [comment, setComment] = useState("");
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const authUser = useAuthStore((state) => state.user);

  const { isCommenting, handlePostComment } = usePostComment();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() => commentRef.current.focus()}
        >
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {isProfilePage && (
        <Text fontSize={12} color={"grey"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={700}>
            {profileCreator?.userName}
            {"  "}
            <Text as={"span"} fontWeight={400}>
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
              View all {post.comments.length} comments
            </Text>
          )}
        </>
      )}

      {authUser && (
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Add a comment..."
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            ></Input>
            <InputRightElement>
              <Button
                fontSize={14}
                fontWeight={600}
                color={"blue.500"}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
