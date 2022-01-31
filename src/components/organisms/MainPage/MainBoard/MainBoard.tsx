import React, { useCallback, useState } from 'react';
import MainCards from 'components/organisms/MainPage/MainCards';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';
import MainPopularCards from '../MainPopularCards';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectPages, addPages } from 'features/mainBoard/mainBoardSlice';

const DEFAULT_SIZE = 10;

type PropTypes = {
  onMouseDown?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  ref?: React.RefObject<HTMLDivElement>;
};

const MainBoard = ({ onMouseDown, ref }: PropTypes) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const pages = useAppSelector(selectPages);

  const addPage = useCallback(() => {
    dispatch(addPages());
  }, [dispatch]);

  const endLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <StyledContainer onMouseDown={onMouseDown} ref={ref}>
      {isLoading === true && <LoadingSpinner />}
      <MainPopularCards endLoading={endLoading} />
      {pages.map((page) => (
        <MainCards
          isLoading={isLoading}
          key={page}
          page={page}
          lastPage={pages.length - 1}
          size={DEFAULT_SIZE}
          addPage={addPage}
          endLoading={endLoading}
        />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.main`
  ${containerStyle}
  ${flexColumn}
  gap: 0.5rem;
  width: 100%;
  align-items: center;
`;

export default React.forwardRef<HTMLDivElement, PropTypes>(MainBoard);
