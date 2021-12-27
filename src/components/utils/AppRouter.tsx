import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import MyPage from "../pages/MyPage/MyPage";
import ArticleDetailPage from "../pages/ArticleDetailPage/ArticleDetailPage";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my/*" element={<MyPage />} />
        <Route path="detail/:articleId" element={<ArticleDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
