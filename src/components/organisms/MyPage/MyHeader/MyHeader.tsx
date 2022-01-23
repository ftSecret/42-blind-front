import React from 'react';
import Header from 'components/molecules/Header';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';
import Logo from 'components/molecules/Logo';
import { Link } from 'react-router-dom';

const MyHeader = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
    </StyledHeader>
  );
};

const StyledHeader = styled(Header)`
  ${headerStyle}
  position: relative;
`;

export default MyHeader;
