export type CommentType = {
  post_id: number;
  user_id: number;
  parent_id: number;
  comment_id: number;
  post_user_id: number;
  nickname?: string;

  goods: number;
  content: string;
  created_at: string;
  modified_at?: string;
  is_good: boolean;
};
