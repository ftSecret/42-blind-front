import React from 'react';

import Anchor from 'components/molecules/Anchor';
import Header from 'components/molecules/Header';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';

const middleItem = {
  to: '/',
  content: '42 BLIND',
};

const MyHeader = () => {
  return (
    <StyledHeader>
      <Anchor size="base" weight="bold" linkItem={middleItem} />
    </StyledHeader>
  );
};

const StyledHeader = styled(Header)`
  ${headerStyle}
  position: relative;
`;

export default MyHeader;
