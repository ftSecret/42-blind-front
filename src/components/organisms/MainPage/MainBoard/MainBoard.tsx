import React, { useCallback, useState } from 'react';
import MainCards from 'components/organisms/MainPage/MainCards';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import MainPopularCards from '../MainPopularCards';
import LoadingSpinner from 'components/atoms/LoadingSpinner';

const DEFAULT_SIZE = 10;

const MainBoard = () => {
  const [pages, setPages] = useState([0]);
  const [isLoading, setIsLoading] = useState(true);

  const addPage = useCallback(() => {
    setPages((pages) => [...pages, pages.length]);
  }, []);

  const endLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <StyledContainer>
      {isLoading === true && <LoadingSpinner />}
      <MainPopularCards endLoading={endLoading} />
      {pages.map((page) => (
        <MainCards
          key={page}
          page={page}
          size={DEFAULT_SIZE}
          addPage={addPage}
          endLoading={endLoading}
        />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  width: 100%;
  align-items: center;
`;

export default MainBoard;
