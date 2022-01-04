import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import MyPage from 'pages/MyPage/MyPage';
import MainPage from 'pages/MainPage/MainPage';
import PostDetailPage from 'pages/PostDetailPage/PostDetailPage';
import PostWritingPage from 'pages/PostWritingPage/PostWritingPage';

export const PATH_MAIN = '/';
export const PATH_MY = '/my/*';
export const PATH_POST = '/post';
export const PATH_POST_WRITING = '/post-writing';

export const routes = [
  { path: PATH_MAIN, element: <MainPage /> },
  { path: PATH_MY, element: <MyPage /> },
  { path: `${PATH_POST}/:postId`, element: <PostDetailPage /> },
  { path: PATH_POST_WRITING, element: <PostWritingPage /> },
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
