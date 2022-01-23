export type ResponseType<DataType> = {
  code: number;
  message: string;
  data: DataType;
};

export type APIPostCommentsType = {
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

export type APICommentsType = Pick<APIPostCommentsType, 'comments'>['comments'];

export type APIPostType = Omit<APIPostCommentsType, 'comments'>;

export type APICommentMeType = {
  post_id: number;
  parent_id: number;
  comment_id: number;

  goods: number;
  content: string;
  is_good: boolean;
  created_at: string;
  modified_at: string;
};

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
  is_good: boolean;
};

export type GoodCommentRequestType = {
  comment_id: number;
  is_good: boolean;
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

export type NotificationCountDataType = {
  number: number;
};

export enum NotificationType {
  'POST',
  'COMMENT',
}

export type NotificationDataType = {
  notification_id: number;
  post_id: number;
  type: NotificationType;
  parent_id: number;
  comment_content: string;
  created_at: Date;
  deleted_at: Date;
};

export type NotificationRequestType = {
  size: number;
  page: number;
};

export type NotificationCheckRequestType = {
  notification_id: number;
};
