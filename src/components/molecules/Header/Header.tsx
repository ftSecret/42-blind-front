import React from 'react';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';

type PropTypes = {
  left?: JSX.Element | string;
  middle: JSX.Element | string;
  right?: JSX.Element | string;
  className?: string;
};
const Header = ({ left, right, middle, className }: PropTypes) => {
  return (
    <HeaderContainer className={className}>
      <StyledLeftItem>{left}</StyledLeftItem>
      <StyledMiddleItem>{middle}</StyledMiddleItem>
      <StyledRightItem>{right}</StyledRightItem>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.div`
  ${headerStyle}
`;

const StyledLeftItem = styled.span`
  position: absolute;
  left: 1rem;
`;

const StyledMiddleItem = styled.span``;

const StyledRightItem = styled.span`
  position: absolute;
  right: 1rem;
`;

export default Header;
