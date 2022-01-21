import React from 'react';
import ThemeToggle from 'components/molecules/ThemeToggle';
import Header from 'components/molecules/Header';
import Anchor from 'components/molecules/Anchor';
import styled from 'styled-components';
import { centerRowStyle, flexRow } from 'styles/mixin';
import PostWritingButton from '../PostWritingButton';
import { size } from 'styles/theme';
import NotificationsButton from '../Notifications';

const titleItem = {
  to: '/',
  content: '42 BLIND',
};

const myItem = {
  to: '/my',
  content: 'MY',
};

const MainHeader = () => {
  return (
    <Header>
      <StyledLeft>
        <Anchor size="base" weight="bold" linkItem={titleItem} />
        <ThemeToggle />
      </StyledLeft>
      <StyledRight>
        <NotificationsButton />
        <PostWritingButton />
        <StyledMy size="xxs" weight="bold" linkItem={myItem} />
      </StyledRight>
    </Header>
  );
};

const StyledLeft = styled.div`
  ${flexRow}
  align-items: center;
  gap: 0.3rem;
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
  height: ${size.icon};
  min-width: ${size.icon};
`;

export default MainHeader;
