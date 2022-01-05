import Board from 'components/molecules/Board/Board';
import React from 'react';
import { useDummies } from 'utils/useDummies';

const MyPostBoard = () => {
  const { items, load } = useDummies();

  return <Board items={items} load={load} />;
};

export default MyPostBoard;
