import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { containerStyle } from 'styles/mixin';

import { useGetBlindPostDetailQuery } from 'api/blindPost';

import Comments from 'components/molecules/Comments';
import PostDetail from 'components/organisms/PostDetail/PostDetail';
import PostDetailHeader from 'components/organisms/PostDetail/PostDetailHeader';
import { APICommentsType, APIPostType } from 'api/type';

const PostDetailPage = () => {
  const params = useParams();
  const postId = useMemo(() => parseInt(params?.postId ?? ''), [params?.postId]);
  const [post, setPost] = useState<APIPostType>();
  const [comments, setComments] = useState<APICommentsType>();
  const { data, isLoading, isSuccess } = useGetBlindPostDetailQuery(
    { post_id: postId },
    { refetchOnMountOrArgChange: true },
  );

  const setPostDeitail = useCallback((post: APIPostType, comments: APICommentsType) => {
    setPost(post);
    setComments(comments);
  }, []);

  useEffect(() => {
    if (isSuccess && data !== undefined) {
      const {
        data: { comments, ...post },
      } = data;
      setPostDeitail(post, comments);
    }
  }, [data, isSuccess, setPostDeitail]);

  if (post === undefined || comments === undefined) return null;
  return (
    <>
      <PostDetailHeader content="42 블라인드 익명 게시판" />
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <StyledContainer>
          <DetailWrap>
            <PostDetail
              post={post}
              setPostDetail={setPostDeitail}
              comment_number={comments.length}
            />
            <Comments
              postId={postId}
              rawComments={comments}
              postUserId={post.user_id}
              setPostDetail={setPostDeitail}
            />
          </DetailWrap>
        </StyledContainer>
      )}
    </>
  );
};

export default PostDetailPage;

const StyledContainer = styled.div`
  ${containerStyle}
`;
const DetailWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;
