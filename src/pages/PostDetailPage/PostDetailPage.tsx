import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { containerStyle } from 'styles/mixin';

import { useGetBlindPostDetailQuery } from 'api/blindPost';

import Comments from 'components/molecules/Comments';
import PostDetail from 'components/organisms/PostDetail/PostDetail';
import PostDetailHeader from 'components/organisms/PostDetail/PostDetailHeader';

const PostDetailPage = () => {
  const params = useParams();
  const postId = useMemo(() => parseInt(params?.postId ?? ''), [params?.postId]);
  const { data, isLoading, refetch } = useGetBlindPostDetailQuery(
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
        <div>로딩중...</div>
      ) : (
        <StyledContainer>
          <DetailWrap>
            <PostDetail post={post} refetch={refetch} comment_number={comments.length} />
            <Comments
              postId={postId}
              rawComments={comments}
              postUserId={post.user_id}
              refetch={refetch}
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
