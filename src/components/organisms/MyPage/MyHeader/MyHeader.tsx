import React from 'react';

import Anchor from 'components/molecules/Anchor';
import Header from 'components/molecules/Header';
import styled from 'styled-components';

const middleItem = {
  to: '/',
  content: '42 BLIND',
};

const middle = <Anchor size="xl" weight="bold" linkItem={middleItem} />;

const MyHeader = () => {
  return <StyledHeader middle={middle} />;
};

const StyledHeader = styled(Header)`
  position: relative;
`;

export default MyHeader;
