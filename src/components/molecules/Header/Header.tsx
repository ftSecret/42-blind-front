import React from 'react';
import styled from 'styled-components';
import { containerStyle, flexRow, headerStyle } from 'styles/mixin';

type PropTypes = {
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
};
const Header = ({ children, className }: PropTypes) => {
  return (
    <HeaderContainer className={className}>
      <HeaderItem>{children}</HeaderItem>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  ${headerStyle}
`;

export const HeaderItem = styled.div`
  ${containerStyle}
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export default Header;
