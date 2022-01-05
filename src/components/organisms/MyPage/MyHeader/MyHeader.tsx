import React from 'react';

import Anchor from 'components/molecules/Anchor/Anchor';
import Header from 'components/molecules/Header/Header';

const middleItem = {
  to: '/',
  content: '42 BLIND',
};

const items = {
  middle: <Anchor size="xl" weight="bold" linkItem={middleItem} />,
};

const MyHeader = () => {
  return <Header items={items} />;
};
export default MyHeader;
