export type PostCardType = {
  user_id: number;
  post_id: number;
  title: string;
  content: string;
  created_at: Date;
  modified_at?: Date;
  count: {
    views: number;
    likes: number;
    comments: number;
  };
};

export const getDummies = (): PostCardType[] => [
  {
    post_id: Math.floor(Math.random() * 20),
    user_id: 123,
    title: '테스트 제목 입니다 1 user01',
    content: '테스트 내용 테스트 내용 저녁 뭐먹지 추천 부탁드려요',
    created_at: new Date(),
    count: {
      views: 10,
      likes: 1,
      comments: 10,
    },
    modified_at: new Date(),
  },
];

export const getCommentsDummies = [
  {
    id: 1,
    user_id: 'user01',
    content: '댓글 답니다',
    created_at: new Date(),
    likes: 1,
  },
  {
    id: 2,
    user_id: 'user02',
    content: '댓글 답니다요 2',
    created_at: new Date(),
    likes: 1,
  },
  {
    id: 3,
    user_id: 'user02',
    content: '댓글을 한번 테스트용으로 달기 배고프다 저녁 메뉴 추천은 돈까스',
    created_at: new Date(),
    likes: 1,
  },
  {
    id: 4,
    user_id: 'user02',
    content: '댓글 답니다요 2',
    created_at: new Date(),
    likes: 1,
  },
  {
    id: 5,
    user_id: 'user02',
    content: '댓글을 한번 테스트용으로 달기 배고프다 저녁 메뉴 추천은 돈까스',
    created_at: new Date(),
    likes: 1,
  },
  {
    id: 6,
    user_id: 'user02',
    content: '댓글을 한번 테스트용으로 달기 배고프다 저녁 메뉴 추천은 돈까스',
    created_at: new Date(),
    likes: 1,
  },
  {
    id: 7,
    user_id: 'user02',
    content: '댓글 답니다요 2',
    created_at: new Date(),
    likes: 1,
  },
  {
    id: 8,
    user_id: 'user02',
    content: '댓글을 한번 테스트용으로 달기 배고프다 저녁 메뉴 추천은 돈까스',
    created_at: new Date(),
    likes: 1,
  },
];
