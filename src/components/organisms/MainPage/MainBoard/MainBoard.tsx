import React, { useCallback, useState } from 'react';
import MainCards from 'components/organisms/MainPage/MainCards';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

const DEFAULT_SIZE = 10;

const MainBoard = () => {
  const [pages, setPages] = useState([0]);

  const addPage = useCallback(() => {
    setPages((pages) => [...pages, pages.length]);
  }, []);

  return (
    <StyledContainer>
      {pages.map((page) => (
        <MainCards key={page} page={page} size={DEFAULT_SIZE} addPage={addPage} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`;

export default MainBoard;
