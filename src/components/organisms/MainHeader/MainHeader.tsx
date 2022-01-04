import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexRow } from 'styles/mixin';
import ThemeToggle from 'components/atoms/ThemeToggle/ThemeToggle';

const MainHeader = () => {
  return (
    <StyledContainer>
      <ThemeToggle />
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

const StyledTitle = styled.h1`
  box-sizing: border-box;
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: bold;
  line-height: ${({ theme }) => theme.fonts.lineheight.base};
  text-align: center;
  color: ${({ theme }) => theme.colors.default};
`;

const StyledMyPage = styled.div`
  position: absolute;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.default};
  font-weight: bold;
  a {
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
`;
