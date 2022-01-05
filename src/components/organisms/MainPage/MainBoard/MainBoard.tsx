import Board from 'components/molecules/Board/Board';
import React, { useCallback, useState } from 'react';
import { getDummies, PostCardType } from 'utils/getDummies';

const MainBoard = () => {
  const [items, setItems] = useState<PostCardType[]>([]);

  const load = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    setItems((items) => [...items, ...getDummies()]);
  }, []);

  return <Board items={items} load={load} />;
};

export default MainBoard;
