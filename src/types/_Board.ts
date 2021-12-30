/*
Mock API Board 관련 응답
{
  "code": 200,
  "message": "조회완료",
  "data": {
    "title": "42Blind",
    "content": "비밀이에요 쉿",
    "views": 123,
    "likes": 10,
    "createdAt": "2021-12-30T06:33:08.151054",
    "updatedAt": "2021-12-30T06:33:08.15106",
    "user": null,
    "comments": null
  }
}
*/

export type _BoardResponse = {
  code: number;
  message: string;
  data: {
    title: string;
    content: string;
    views: number;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    user: string | null;
    comments: null;
  };
};
