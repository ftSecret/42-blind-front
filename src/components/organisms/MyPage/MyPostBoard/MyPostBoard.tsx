import { useGetBlindPostMeQuery } from 'api/blindPost';
import Board from 'components/molecules/Board';
import React, { useEffect, useState } from 'react';
import { PostType } from 'types';
import { formatPost } from 'utils/formatPost';

const MyPostBoard = () => {
  const [items, setItems] = useState<PostType[]>([]);
  const rawMyPosts = useGetBlindPostMeQuery();

  useEffect(() => {
    setItems(formatPost(rawMyPosts.data?.data));
  }, [rawMyPosts.data?.data]);

  return <Board items={items} />;
};

export default MyPostBoard;
