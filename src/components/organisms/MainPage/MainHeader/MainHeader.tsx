import React from 'react';
import ThemeToggle from 'components/molecules/ThemeToggle';
import Header from 'components/molecules/Header';
import Anchor from 'components/molecules/Anchor';
import { isAuth } from 'utils/isAuth';

const rightItem = {
  to: isAuth() ? '/my' : '/login',
  content: isAuth() ? '마이페이지' : '로그인',
};

const middleItem = {
  to: '/',
  content: '42 BLIND',
};

const items = {
  left: <ThemeToggle />,
  middle: <Anchor size="xl" weight="bold" linkItem={middleItem} />,
  right: <Anchor size="sm" weight="bold" linkItem={rightItem} />,
};

const MainHeader = () => {
  return <Header items={items} />;
};

export default MainHeader;
