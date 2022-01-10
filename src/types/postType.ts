export type PostType = {
  post_id: number;
  user_id: number;
  title: string;
  content: string;
  created_at: string;
  modified_at?: string;
  count: {
    views: number;
    goods: number;
    comments: number;
  };
};
