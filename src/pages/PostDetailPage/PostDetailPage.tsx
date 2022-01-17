import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import { containerStyle } from 'styles/mixin';

import { useGetBlindPostDetailQuery } from 'api/blindPost';

import Comments from 'components/molecules/Comments';
import PostDetail from 'components/organisms/PostDetail/PostDetail';
import PostDetailHeader from 'components/organisms/PostDetail/PostDetailHeader';
import { APICommentsType, APIPostType } from 'api/type';
import ErrorOutlineIcon from 'components/atoms/icons/ErrorOutlineIcon';
import Button from 'components/atoms/Button';
import { CODE_404 } from 'constants/api';

const PostDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const postId = useMemo(() => parseInt(params?.postId ?? ''), [params?.postId]);
  const [post, setPost] = useState<APIPostType>();
  const [comments, setComments] = useState<APICommentsType>();
  const { data, isLoading, isSuccess } = useGetBlindPostDetailQuery(
    { post_id: postId },
    { refetchOnMountOrArgChange: true },
  );

  const goBack = () => {
    navigate(-1);
  };

  const setPostDeitail = useCallback((post: APIPostType, comments: APICommentsType) => {
    setPost(post);
    setComments(comments);
  }, []);

  useEffect(() => {
    if (isSuccess && data !== undefined && comments !== undefined) {
      const {
        data: { comments, ...post },
      } = data;
      setPostDeitail(post, comments);
    }
  }, [comments, data, isSuccess, setPostDeitail]);

  if (post === undefined || comments === undefined || data?.code === CODE_404)
    return (
      <StyledDeletedPostSection>
        <ErrorOutlineIcon size={40} />
        <p>해당 게시글이 삭제되어 글을 볼 수 없습니다.</p>
        <BackButton onClick={goBack} children={'이전페이지'} />
      </StyledDeletedPostSection>
    );

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

const StyledDeletedPostSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  text-align: center;
  font-size: 1.05rem;
  margin: 120px 0;
  color: ${({ theme }) => theme.colors.grey};
`;

const BackButton = styled(Button)`
  all: unset;
  background-color: ${({ theme }) => theme.colors.red};
  width: 150px;
  height: 50px;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.white};
`;
