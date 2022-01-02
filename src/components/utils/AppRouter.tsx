import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import MyPage from 'pages/MyPage/MyPage';
import MainPage from 'pages/MainPage/MainPage';
import ArticleDetailPage from 'pages/ArticleDetailPage/ArticleDetailPage';
import ArticleWritingPage from 'pages/ArticleWritingPage/ArticleWritingPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my/*" element={<MyPage />} />
        <Route path="/detail/:articleId" element={<ArticleDetailPage />} />
        <Route path="/article-writing" element={<ArticleWritingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;