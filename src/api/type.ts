export type ResponseType<DataType> = {
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
    is_good: boolean;
    created_at: string;
    modified_at: string;
  }[];

  post_id: number;
  user_id: number;

  title: string;
  content: string;
  is_good: boolean;
  created_at: string;
  modified_at: string;

  views: number;
  goods: number;
  comment_number: number;
};

export type APICommentType = Pick<APIPostCommentType, 'comments'>['comments'];

export type APIPostType = Omit<APIPostCommentType, 'comments'>;

export type GetPostRequestType = {
  page: number;
  size: number;
};

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

export type GoodPostRequestType = {
  post_id: number;
};

export type EditPostRequestType = {
  content: string;
  post_id: number;
  title: string;
};

export type DeletePostRequestType = {
  post_id: number;
};

export type AddCommentRequestType = {
  content: string;
  post_id: number;
  parent_id: number;
};

export type DeleteCommentRequestType = {
  comment_id: number;
  post_id: number;
};
export type EditCommentRequestType = {
  content: string;
  post_id: number;
  comment_id: number;
};
