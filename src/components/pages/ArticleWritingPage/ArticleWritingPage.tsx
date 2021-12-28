import React from 'react';
import classes from 'components/pages/ArticleWritingPage/ArticleWritingPage.module.css';
import ArticleWritingHeader from 'components/ArticleWritingHeader/ArticleWritingHeader';
import ArticleWritingDetail from 'components/ArticleWritingDetail/ArticleWritingDetail';

const ArticleWritingPage = () => {
  return (
    <>
      <ArticleWritingHeader />
      <ArticleWritingDetail />
    </>
  );
};

export default ArticleWritingPage;
