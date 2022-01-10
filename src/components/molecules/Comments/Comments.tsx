import { useState, useEffect } from 'react';
import Comment from 'components/molecules/Comment';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import dayjs from 'dayjs';
import { APICommentType } from 'api/type';
import { CommentType } from 'types';

export type CommentPropTypes = {
  nickname?: string;
} & CommentType;

type UserIndexType = {
  [key: number]: number;
};

type PropTypes = {
  postId: number;
  postUserId: number;
  rawComments: APICommentType;
};

const Comments = ({ postId, postUserId, rawComments }: PropTypes) => {
  const [comments, setComments] = useState<CommentPropTypes[]>([]);

  useEffect(() => {
    setComments(sortComments(insertNickname(formatComments(rawComments, postId, postUserId))));
  }, [postId, postUserId, rawComments]);

  return (
    <StyledComments>
      {comments.map((comment) => (
        <Comment key={comment.comment_id} {...comment} />
      ))}
    </StyledComments>
  );
};

const formatComments = (
  rawComments: APICommentType,
  postId: number,
  postUserId: number,
): CommentPropTypes[] => {
  return rawComments.map((comment) => ({
    post_id: postId,
    post_user_id: postUserId,
    ...comment,
  }));
};

const insertNickname = (rawComments: CommentPropTypes[]) => {
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
type TempCommentTypes = { reply: CommentPropTypes[] } & CommentPropTypes;
const sortComments = (comments: CommentPropTypes[]) => {
  const tempComments: TempCommentTypes[] = [];
  // 시간 순서대로 정렬
  comments.sort((a, b) => (dayjs(a.created_at).isAfter(dayjs(b.created_at)) ? 1 : -1));

  // 답글은 댓글의 자식으로 이동
  comments.forEach((comment) => {
    if (comment.parent_id === null) {
      tempComments.push({ ...comment, reply: [] });
    } else {
      tempComments.find((elem) => elem.comment_id === comment.parent_id)?.reply.push(comment);
    }
  });

  // 자식으로 있던 댓글을 분리
  const result: CommentPropTypes[] = tempComments.reduce(
    (prev: CommentPropTypes[], current: TempCommentTypes) => [...prev, current, ...current.reply],
    [],
  );
  return result;
};

const StyledComments = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  overflow-y: auto;
`;

export default Comments;
