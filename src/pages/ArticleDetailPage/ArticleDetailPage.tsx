import Comments from 'components/Comments/Comments';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import ArticleDetail from 'components/ArticleDetail/ArticleDetail';

import styled from 'styled-components';

const ArticleDetailPage = () => {
  return (
    <>
      <DetailHeader content="42 블라인드 익명 게시판" />
      <StyledWrap>
        <ArticleDetail />
        <Comments />
        <StyledInputWrap>
          <StyledInput placeholder="댓글을 입력하세요" />
        </StyledInputWrap>
      </StyledWrap>
    </>
  );
};

export default ArticleDetailPage;

const StyledWrap = styled.section`
  padding: 10px 20px 0 20px;
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
  color: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
`;