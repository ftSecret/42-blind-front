import Board from 'components/molecules/Board';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import { usePost } from 'hooks';
import { PostType } from 'types';
import { useGetBlindPostQuery } from 'api/blindPost';
import { formatPost } from 'utils/formatPost';

const size = 10;

const MainBoard = () => {
  const [items, setItems] = useState<PostType[]>([]);
  const [page, setPage] = useState(0);
  const getBlindPost = useGetBlindPostQuery({ size, page }, { refetchOnMountOrArgChange: true });
  const prevLength = useRef(size);
  const { setPost } = usePost();
  const load = useCallback(() => {
    if (prevLength.current === size && !getBlindPost.isLoading) {
      setPage((page) => page + 1);
      prevLength.current = getBlindPost.data?.data.length ?? 0;
    }
  }, [getBlindPost.data?.data.length, getBlindPost.isLoading]);

  useEffect(() => {
    setItems((prev) => [...prev, ...formatPost(getBlindPost.data?.data)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setPost(items);
  }, [items, setPost]);

  return <Board items={items} load={load} isLoadEnd={prevLength.current !== size} />;
};

export default MainBoard;
