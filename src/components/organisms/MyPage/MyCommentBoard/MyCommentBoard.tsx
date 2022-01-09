import Board from 'components/molecules/Board';
import React from 'react';
import { useDummies } from 'hooks';

const MyCommentBoard = () => {
  const { items, load } = useDummies();

  return <Board items={items} load={load} />;
};

export default MyCommentBoard;