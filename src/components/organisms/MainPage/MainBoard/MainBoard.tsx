import Board from 'components/molecules/Board/Board';
import React from 'react';
import { useDummies } from 'utils/useDummies';

const MainBoard = () => {
  const { items, load } = useDummies();

  return <Board items={items} load={load} />;
};

export default MainBoard;
