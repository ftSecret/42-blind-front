import { useGetBlindPostDetailQuery } from 'api/blindPost';
import Comments from 'components/molecules/Comments';
import CommentInput from 'components/organisms/PostDetail/CommentInput';
import PostDetailHeader from 'components/organisms/PostDetail/PostDetailHeader';
import PostDetail from 'components/templates/PostDetail';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { containerStyle } from 'styles/mixin';

const PostDetailPage = () => {
  const params = useParams();
  const postId = useMemo(() => parseInt(params?.postId ?? ''), [params?.postId]);
  const { data, isLoading } = useGetBlindPostDetailQuery(
    { post_id: postId },
    { refetchOnMountOrArgChange: true },
  );
  // TODO: undefined 일때 처리
  if (data === undefined) return null;
  const {
    data: { comments, ...post },
  } = data;
  return (
    <>
      <PostDetailHeader content="42 블라인드 익명 게시판" />
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <StyledContainer>
          <DetailWrap>
            <PostDetail post={post} />
            <Comments postId={postId} rawComments={comments} postUserId={post.user_id} />
            <StyledInputWrap>
              <CommentInput postId={postId} />
            </StyledInputWrap>
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

const StyledInputWrap = styled.div`
  padding: 10px;
`;
