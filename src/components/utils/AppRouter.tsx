import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import MyPage from 'pages/MyPage';
import MainPage from 'pages/MainPage';
import PostDetailPage from 'pages/PostDetailPage';
import PostWritingPage from 'pages/PostWritingPage';
import PostDetailEditPage from 'pages/PostDetailEditPage';
import LoginPage from 'pages/LoginPage';
import { useAuth } from 'hooks/useAuth';
import { isAuth } from 'utils/isAuth';

export const PATH_MAIN = '/';
export const PATH_MY = '/my';
export const PATH_POST = '/post';
export const PATH_POST_WRITING = '/post-writing';
export const PATH_POST_EDIT = '/post-edit';
export const PATH_LOGIN = '/login';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAuth();
  if (!isAuth) return <Navigate to={PATH_LOGIN} replace />;
  return children;
};

export const routes = [
  { path: PATH_MAIN, element: <MainPage /> },
  {
    path: `${PATH_MY}/*`,
    element: (
      <RequireAuth>
        <MyPage />
      </RequireAuth>
    ),
  },
  {
    path: `${PATH_POST}/:postId`,
    element: (
      <RequireAuth>
        <PostDetailPage />
      </RequireAuth>
    ),
  },
  {
    path: PATH_POST_WRITING,
    element: (
      <RequireAuth>
        <PostWritingPage />
      </RequireAuth>
    ),
  },
  {
    path: `${PATH_POST_EDIT}/:postId`,
    element: (
      <RequireAuth>
        <PostDetailEditPage />
      </RequireAuth>
    ),
  },
  { path: PATH_LOGIN, element: isAuth() ? <Navigate to={PATH_MAIN} replace /> : <LoginPage /> },
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
