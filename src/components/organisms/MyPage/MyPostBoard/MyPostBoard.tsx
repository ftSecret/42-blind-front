import { useGetBlindPostMeQuery } from 'api/blindPost';
import React, { useEffect, useState } from 'react';
import { PostType } from 'types';
import { formatPost } from 'utils/formatPost';

const MyPostBoard = () => {
  const [items, setItems] = useState<PostType[]>([]);
  const rawMyPosts = useGetBlindPostMeQuery();

  useEffect(() => {
    setItems(formatPost(rawMyPosts.data?.data));
  }, [rawMyPosts.data?.data]);

  return null;
  // return <Board items={items} />;
};

export default MyPostBoard;
