import React from 'react';

import Anchor from 'components/molecules/Anchor';
import Header from 'components/molecules/Header';

const middleItem = {
  to: '/',
  content: '42 BLIND',
};

const middle = <Anchor size="xl" weight="bold" linkItem={middleItem} />;

const MyHeader = () => {
  return <Header middle={middle} />;
};
export default MyHeader;
