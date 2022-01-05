import React from 'react';
import ThemeToggle from 'components/molecules/ThemeToggle/ThemeToggle';
import Header from 'components/molecules/Header/Header';
import Anchor from 'components/molecules/Anchor/Anchor';

const rightItem = {
  to: 'my/post',
  content: '마이페이지',
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
