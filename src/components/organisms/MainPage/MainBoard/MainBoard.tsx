import Board from 'components/molecules/Board';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import { usePost } from 'hooks';
import { PostCardType } from 'utils/getDummies';
import { useGetBlindPostQuery } from 'api/blindPost';

const size = 10;

const MainBoard = () => {
  const [items, setItems] = useState<PostCardType[]>([]);
  const [page, setPage] = useState(0);
  const getBlindPost = useGetBlindPostQuery({ size, page });
  const prevLength = useRef(size);
  const { setPost } = usePost();
  const load = useCallback(() => {
    if (prevLength.current === size && !getBlindPost.isLoading) {
      setPage((page) => page + 1);
      prevLength.current = getBlindPost.data?.data.length ?? 0;
    }
  }, [getBlindPost.data?.data.length, getBlindPost.isLoading]);

  useEffect(() => {
    const postCard = getBlindPost.data?.data.map((item) => {
      const { views, goods, id, contents, ...rest } = item;
      return {
        post_id: id,
        content: contents,
        count: { views, likes: goods, comments: 0 },
        ...rest,
      };
    });
    if (postCard) setItems((prev) => [...prev, ...postCard]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setPost(items);
  }, [items, setPost]);

  return <Board items={items} load={load} />;
};

export default MainBoard;
