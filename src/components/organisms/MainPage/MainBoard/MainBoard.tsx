import Board from 'components/molecules/Board/Board';
import React, { useState } from 'react';
import { getDummies, PostCardType } from 'utils/getDummies';

const MainBoard = () => {
  const [items, setItems] = useState<PostCardType[]>([]);

  const load = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setItems((items) => [...items, ...getDummies()]);
  };

  return <Board items={items} load={load} />;
};

export default MainBoard;
