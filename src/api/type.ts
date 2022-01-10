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

/*
"comments": [
      {
        "content": "string",
        "goods": 0,
        "id": 0,
        "parent_id": 0
      }
    ],
    "contents": "string",
    "created_at": "2022-01-10T06:17:07.079Z",
    "fakename": "string",
    "goods": 0,
    "id": 0,
    "modified_at": "2022-01-10T06:17:07.079Z",
    "title": "string",
    "views": 0
*/
export type GoodPostDataType = {
  comments: { content: string; goods: number; id: number; parent_id: number }[];
  contents: string;
  created_at: string;
  fakename: string;
  goods: number;
  id: number;
  modified_at: string;
  title: string;
  views: number;
};

export type GoodPostRequestType = {
  post_id: number;
};

export type GoodPostResponseType = DefaultResponseType<GoodPostDataType>;
