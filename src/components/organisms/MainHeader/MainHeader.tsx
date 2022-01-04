import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';
import ThemeToggle from 'components/molecules/ThemeToggle/ThemeToggle';
import Typography from 'components/atoms/Typography/Typography';
import { PATH_MY } from 'components/utils/AppRouter';

const MainHeader = () => {
  return (
    <StyledContainer>
      <ThemeToggle />
      <Typography size="xl" weight="bold">
        42 BLIND
      </Typography>
      <StyledMyPage size="sm" weight="bold">
        <Link to={`${PATH_MY}/post`}>마이페이지</Link>
      </StyledMyPage>
    </StyledContainer>
  );
};

export default MainHeader;

const StyledContainer = styled.div`
  ${headerStyle}
`;

const StyledMyPage = styled(Typography)`
  position: absolute;
  right: 1rem;
`;
