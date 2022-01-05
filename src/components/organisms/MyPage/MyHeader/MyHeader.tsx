import Typography from 'components/atoms/Typography/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';

const MyHeader = () => {
  return (
    <StyledContainer>
      <Typography size="xl" weight="bold">
        <Link to="/">42 BLIND</Link>
      </Typography>
    </StyledContainer>
  );
};

export default MyHeader;

const StyledContainer = styled.div`
  ${headerStyle}
`;
