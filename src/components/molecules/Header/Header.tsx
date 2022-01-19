import React from 'react';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';

type PropTypes = {
  left?: JSX.Element | string;
  middle?: JSX.Element | string;
  right?: JSX.Element | string;
  className?: string;
};
const Header = ({ left, right, middle, className }: PropTypes) => {
  return (
    <HeaderContainer className={className}>
      {left}
      {middle}
      {right}
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.div`
  ${headerStyle}
`;

export default Header;
