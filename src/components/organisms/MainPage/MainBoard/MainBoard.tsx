import React, { useCallback, useMemo, useState } from 'react';
import MainCards from 'components/organisms/MainPage/MainCards';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import MainPopularCards from '../MainPopularCards';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectLastPages, addLastPage } from 'features/mainBoard/mainBoardSlice';

const DEFAULT_SIZE = 10;

const MainBoard = () => {
  const lastPage = useAppSelector(selectLastPages);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const pages = useMemo(() => Array.from({ length: lastPage + 1 }, (v, i) => i), [lastPage]); // lastPage만큼 배열을 생성하는 로직. ex: if (lastpage === 3) -> pages = [0, 1, 2]

  const addPage = useCallback(() => {
    dispatch(addLastPage());
  }, [dispatch]);

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
          lastPage={lastPage}
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
