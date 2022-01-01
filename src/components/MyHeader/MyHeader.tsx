import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyHeader = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        <Link to="/">42 BLIND</Link>
      </StyledTitle>
    </StyledContainer>
  );
};

export default MyHeader;

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 1em;
`;

const StyledTitle = styled.h1`
  box-sizing: border-box;
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
`;
