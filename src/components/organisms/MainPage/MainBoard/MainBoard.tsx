import Board from 'components/molecules/Board';
import React, { useCallback, useRef, useState } from 'react';
import { usePost } from 'hooks';
import { PostCardType } from 'utils/getDummies';

const MainBoard = () => {
  const { getPosts } = usePost();
  const [items, setItems] = useState<PostCardType[]>([]);
  const page = useRef(0);

  return (
    <Board
      items={items}
      load={useCallback(async () => {
        const post = getPosts(page.current, 10);
        if (post.length === 0) return;
        await new Promise((resolve) => setTimeout(resolve, 300));
        setItems((items) => [...items, ...getPosts(page.current++, 10)]);
      }, [getPosts])}
    />
  );
};

export default MainBoard;
