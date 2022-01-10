export type DefaultResponseType<DataType> = {
  code: number;
  message: string;
  data: DataType;
};

export type APIPostCommentType = {
  comments: {
    user_id: number;
    parent_id: number;
    comment_id: number;

    goods: number;
    content: string;
    created_at: string;
    modified_at: string;
  }[];

  post_id: number;
  user_id: number;

  title: string;
  content: string;
  created_at: string;
  modified_at: string;

  views: number;
  goods: number;
  comment_number: number;
};
export type IsGoodType = { is_good: boolean };
export type APICommentType = Pick<APIPostCommentType, 'comments'>['comments'];
export type APIPostType = Omit<APIPostCommentType, 'comments'>;

export type GetPostResponseType = DefaultResponseType<APIPostType[]>;

export type GetPostRequestType = {
  page: number;
  size: number;
};

export type GetPostDetailResponseType = DefaultResponseType<APIPostCommentType & IsGoodType>;

export type GetPostDetailRequestType = {
  post_id: number;
};

export type AddPostRequestType = {
  content: string;
  title: string;
};

export type AddPostDataType = {
  post_id: number;
};

export type AddPostResponseType = DefaultResponseType<AddPostDataType>;

export type GoodPostRequestType = {
  post_id: number;
};

export type GoodPostResponseType = DefaultResponseType<APIPostCommentType>;

export type EditPostRequestType = {
  content: string;
  post_id: number;
  title: string;
};
