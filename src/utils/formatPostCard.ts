import { GetPostDataType } from 'api';

export const formatPostCard = (postData: GetPostDataType[]) =>
  postData.map((item) => {
    const { views, goods, id, contents, ...rest } = item;
    return {
      post_id: id,
      content: contents,
      count: { views, likes: goods, comments: 0 },
      ...rest,
    };
  });
