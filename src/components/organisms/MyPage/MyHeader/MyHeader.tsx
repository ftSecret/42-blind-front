import React from 'react';
import Header from 'components/molecules/Header';
import styled from 'styled-components';
import Logo from 'components/molecules/Logo';
import { Link } from 'react-router-dom';

const MyHeader = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
    </StyledHeader>
  );
};

const StyledHeader = styled(Header)`
  position: relative;
`;

export default MyHeader;
