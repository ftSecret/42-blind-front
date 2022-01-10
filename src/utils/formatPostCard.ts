import { APIPostType } from 'api/type';

export const formatPostCard = (postData: APIPostType[]) =>
  postData.map((item) => {
    const { views, goods, id, content, ...rest } = item;
    return {
      post_id: id,
      content,
      count: { views, likes: goods, comments: 0 },
      ...rest,
    };
  });
