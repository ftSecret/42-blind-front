import React from 'react';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';

type PropTypes = {
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
};
const Header = ({ children, className }: PropTypes) => {
  return <HeaderContainer className={className}>{children}</HeaderContainer>;
};

export const HeaderContainer = styled.div`
  ${headerStyle}
`;

export default Header;
