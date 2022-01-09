export type Post = {
  id: number;
  title: string;
  content: string;
  date: Date;
  status?: {
    //TODO: 추후에 인기게시글이나 블라인드에 대한 내용이 나오면 추가될 예정
  };
  count: {
    views: number;
    comments: number;
    likes: number;
  };
};

export type Edit = {
  post_id: number;
  title: string;
  content: string;
};

export type PostEditResponse = {
  code: number;
  data: {
    contents: string;
    created_at: string;
    goods: number;
    id: number;
    modified_at: string;
    title: string;
    user_id: number;
    views: number;
  };
  message: string;
};
