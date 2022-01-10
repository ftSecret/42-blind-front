export type PostCardType = {
  id: number;
  user_id: number;
  title: string;
  content: string;
  created_at: string;
  modified_at?: string;
  count: {
    views: number;
    likes: number;
    comments: number;
  };
};

export const getDummies = (): PostCardType[] => [
  {
    id: Math.floor(Math.random() * 20),
    user_id: 0,
    title: '테스트 제목 입니다 1',
    content: '테스트 내용 테스트 내용 저녁 뭐먹지 추천 부탁드려요',
    created_at: new Date().toString(),
    count: {
      views: Math.floor(Math.random() * 20),
      likes: Math.floor(Math.random() * 20),
      comments: Math.floor(Math.random() * 20),
    },
    modified_at: undefined,
  },
  {
    id: Math.floor(Math.random() * 20),
    user_id: 1,
    title: '테스트 제목 입니다 2',
    content: '테스트 내용 테스트 내용 저녁 뭐먹지 추천 부탁드려요',
    created_at: new Date().toString(),
    count: {
      views: Math.floor(Math.random() * 20),
      likes: Math.floor(Math.random() * 20),
      comments: Math.floor(Math.random() * 20),
    },
    modified_at: undefined,
  },
];
