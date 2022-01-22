import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';

import { useGetBlindPostDetailQuery } from 'api/blindPost';

import Comments from 'components/molecules/Comments';
import PostDetail from 'components/organisms/PostDetail/PostDetail';
import PostDetailHeader from 'components/organisms/PostDetail/PostDetailHeader';
import { APICommentsType, APIPostType } from 'api/type';
import { CODE_2000, CODE_4040 } from 'constants/api';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import ErrorMessage from 'components/molecules/ErrorMessage';
import { useSwipeable } from 'react-swipeable';

const PostDetailPage = () => {
  const navigate = useNavigate();
  const swipeHandler = useSwipeable({
    onSwipedRight: () => {
      navigate(-1);
    },
  });
  const params = useParams();
  const postId = useMemo(() => parseInt(params?.postId ?? ''), [params?.postId]);
  const [post, setPost] = useState<APIPostType>();
  const [comments, setComments] = useState<APICommentsType>();
  const { data, isLoading, isSuccess, isError } = useGetBlindPostDetailQuery(
    { post_id: postId },
    { refetchOnMountOrArgChange: true },
  );

  const setPostDeitail = useCallback((post: APIPostType, comments: APICommentsType) => {
    setPost(post);
    setComments(comments);
  }, []);

  useEffect(() => {
    if (isSuccess && data?.code === CODE_2000 && data !== undefined) {
      const {
        data: { comments, ...post },
      } = data;
      setPostDeitail(post, comments);
    }
  }, [data, isSuccess, setPostDeitail]);

  return (
    <StyledSection {...swipeHandler}>
      <PostDetailHeader content="42 블라인드 익명 게시판" />
      {isLoading && (
        <StyledContainer>
          <LoadingSpinner />
        </StyledContainer>
      )}
      {post && comments && (
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
      <ErrorMessage
        isError={isError === true}
        message="에러가 발생하여 데이터를 읽어오는데 실패했습니다."
      />
      <ErrorMessage
        isError={data?.code === CODE_4040}
        message="해당 게시글이 삭제되어 글을 볼 수 없습니다."
      />
    </StyledSection>
  );
};

export default PostDetailPage;

const StyledSection = styled.section`
  ${flexColumn}
  height: 100vh;
  width: 100%;
`;

const StyledContainer = styled.div`
  ${containerStyle}
  display: flex;
  flex: auto;
  margin: 0 auto;
  justify-content: center;
`;

const DetailWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;
