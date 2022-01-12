import React from 'react';
import { PostType } from 'types';
import Card from 'components/molecules/Card';

const PostCard = ({ title, content, created_at, count, ...rest }: PostType) => {
  return <Card title={title} content={content} created_at={created_at} count={count} />;
};

export default PostCard;
