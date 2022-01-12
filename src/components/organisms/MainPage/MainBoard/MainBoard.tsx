import Board from 'components/molecules/Board';
import React, { useState, useEffect } from 'react';
import { PostType } from 'types';
import { useGetBlindPostQuery } from 'api/blindPost';
import { formatPost } from 'utils/formatPost';

const DEFAULT_SIZE = 100;

const MainBoard = () => {
  const [items, setItems] = useState<PostType[]>([]);
  const [page] = useState(0);
  const getBlindPost = useGetBlindPostQuery(
    { size: DEFAULT_SIZE, page },
    { refetchOnMountOrArgChange: true },
  );

  useEffect(() => {
    if (getBlindPost.data) setItems((prev) => [...prev, ...formatPost(getBlindPost.data?.data)]);
  }, [getBlindPost.data]);

  return <Board items={items} />;
};

export default MainBoard;
