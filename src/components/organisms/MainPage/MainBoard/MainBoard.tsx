import React, { useCallback, useState } from 'react';
import MainCards from 'components/organisms/MainPage/MainCards';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import MainPopularCards from '../MainPopularCards';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectPages, appendPage } from 'features/mainBoard/mainBoardSlice';

const DEFAULT_SIZE = 10;

const MainBoard = () => {
  const pages = useAppSelector(selectPages); // [true : 10, true : 0, false : 0]
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const addPage = useCallback(() => {
    dispatch(appendPage());
  }, [dispatch]);

  const endLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <StyledContainer>
      {isLoading === true && <LoadingSpinner />}
      <MainPopularCards endLoading={endLoading} />
      {pages.map((page, idx) => (
        <MainCards
          key={idx}
          page={idx}
          isLoaded={page}
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
