import Comments from 'components/molecules/Comments/Comments';
import PostDetailHeader from 'components/organisms/PostDetail/PostDetailHeader/PostDetailHeader';
import PostDetail from 'components/templates/PostDetail/PostDetail';

import styled from 'styled-components';
import { containerStyle } from 'styles/mixin';

const PostDetailPage = () => {
  return (
    <>
      <PostDetailHeader content="42 블라인드 익명 게시판" />
      <StyledContainer>
        <DetailWrap>
          <PostDetail />
          <Comments />
          <StyledInputWrap>
            <StyledInput placeholder="댓글을 입력하세요" />
          </StyledInputWrap>
        </DetailWrap>
      </StyledContainer>
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

const StyledInput = styled.input`
  width: -webkit-fill-available;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grey};
  padding: 0 10px;
`;
