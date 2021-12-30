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
