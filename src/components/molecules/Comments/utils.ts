import { APICommentsType } from 'api/type';
import dayjs from 'dayjs';
import { CommentType } from 'types';

export const formatComments = (
  rawComments: APICommentsType,
  postId: number,
  postUserId: number,
): CommentType[] => {
  return rawComments.map((comment) => ({
    post_id: postId,
    post_user_id: postUserId,
    ...comment,
    parent_id: comment.parent_id ?? -1,
  }));
};

export type UserIndexType = {
  [key: number]: number;
};

export const insertNickname = (rawComments: CommentType[]) => {
  const user_idx_obj: UserIndexType = {};
  return rawComments.map((elem) => {
    if (user_idx_obj[elem.user_id] === undefined)
      user_idx_obj[elem.user_id] = Object.keys(user_idx_obj).length + 1;
    return { ...elem, nickname: `익명${user_idx_obj[elem.user_id]}` };
  });
};

/*
  댓글, 답글을 다음 기준으로 정렬합니다.
  1. 답글은 댓글의 자식으로 들어갈 수 있도록 변경합니다.
  2. 댓글, 답글은 생성 순서대로 정렬합니다.
  */
export type TempCommentTypes = { reply: CommentType[] } & CommentType;
export const sortComments = (comments: CommentType[]) => {
  const tempComments: TempCommentTypes[] = [];
  // 시간 순서대로 정렬
  comments.sort((a, b) => (dayjs(a.created_at).isAfter(dayjs(b.created_at)) ? 1 : -1));

  // reply 추가
  comments.forEach((comment) => tempComments.push({ ...comment, reply: [] }));

  // 답글은 댓글의 자식으로 이동
  comments.forEach((comment) => {
    if (comment.parent_id !== -1)
      tempComments.find((elem) => elem.comment_id === comment.parent_id)?.reply.push(comment);
  });

  // 자식으로 있던 댓글을 분리
  const result: CommentType[] = tempComments.reduce(
    (prev: CommentType[], current: TempCommentTypes) => [...prev, current, ...current.reply],
    [],
  );
  return result;
};
