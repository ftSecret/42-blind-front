import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexRow } from 'assets/styles/mixin';

const MainHeader = () => {
  return (
    <StyledContainer>
      <StyledTitle>42 BLIND</StyledTitle>
      <StyledMyPage>
        <Link to="/my/article">마이페이지</Link>
      </StyledMyPage>
    </StyledContainer>
  );
};

export default MainHeader;

const StyledContainer = styled.div`
  ${flexRow}
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 0 1em;

  & > h2 {
    min-width: 70px;
    font-weight: bold;
  }
`;

const StyledTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
`;

const StyledMyPage = styled.div`
  position: absolute;
  right: 0.5rem;
`;
