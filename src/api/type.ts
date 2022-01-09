export type DefaultResponseType<DataType> = {
  code: number;
  message: string;
  data: DataType;
};

export type GetPostDataType = {
  modified_at: string;
  created_at: string;
  fakename?: string;
  contents: string;
  user_id: number;
  goods: number;
  title: string;
  views: number;
  id: number;
};

export type GetPostResponseType = DefaultResponseType<GetPostDataType[]>;

export type GetPostRequestType = {
  page: number;
  size: number;
};

export type AddPostRequestType = {
  content: string;
  title: string;
};

export type AddPostDataType = {
  post_id: number;
};

export type AddPostResponseType = DefaultResponseType<AddPostDataType>;
