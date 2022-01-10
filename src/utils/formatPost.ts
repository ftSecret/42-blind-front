import { APIPostType } from 'api/type';

export const formatPost = (postData?: APIPostType[]) => {
  if (postData === undefined) return [];
  return postData.map((item) => {
    const { views, goods, post_id, content, ...rest } = item;
    return {
      post_id: post_id,
      content,
      count: { views, goods: goods, comments: 0 },
      ...rest,
    };
  });
};
