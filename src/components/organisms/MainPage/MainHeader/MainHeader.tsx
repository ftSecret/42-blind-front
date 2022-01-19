import React from 'react';
import ThemeToggle from 'components/molecules/ThemeToggle';
import Header from 'components/molecules/Header';
import Anchor from 'components/molecules/Anchor';
import styled from 'styled-components';
import { centerRowStyle, flexRow } from 'styles/mixin';
import PostWritingButton from '../PostWritingButton';

const leftItem = {
  to: '/',
  content: '42 BLIND',
};

const rightItem = {
  to: '/my',
  content: 'MY',
};

const StyledLeft = styled.div`
  ${flexRow}
  align-items: center;
  gap: 0.2rem;
`;

const StyledRight = styled.div`
  ${flexRow}
  align-items: center;
  gap: 1rem;
`;

const StyledMy = styled(Anchor)`
  ${centerRowStyle}
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.default};
  border-radius: 5px;
  padding: 0.25rem 0;
  height: 25px;
  min-width: 25px;
  font-size: 0.5rem;
`;

const left = (
  <StyledLeft>
    <Anchor size="base" weight="bold" linkItem={leftItem} />
    <ThemeToggle />
  </StyledLeft>
);

const right = (
  <StyledRight>
    <PostWritingButton />
    <StyledMy weight="bold" linkItem={rightItem} />
  </StyledRight>
);

const MainHeader = () => {
  return <Header left={left} right={right} />;
};

export default MainHeader;
