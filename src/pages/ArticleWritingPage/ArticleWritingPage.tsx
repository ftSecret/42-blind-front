import React from 'react';
import ArticleWritingHeader from 'components/ArticleWritingHeader/ArticleWritingHeader';
import ArticleWritingDetail from 'components/ArticleWritingDetail/ArticleWritingDetail';
import styled from 'styled-components';

const ArticleWritingPage = () => {
  return (
    <WritingWrap>
      <ArticleWritingHeader />
      <ArticleWritingDetail />
    </WritingWrap>
  );
};

const WritingWrap = styled.div`
  padding: 1rem;
`;

export default ArticleWritingPage;
