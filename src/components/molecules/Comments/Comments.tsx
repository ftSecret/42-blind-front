import React, { useState, useEffect, useRef, useCallback } from 'react';

import dayjs from 'dayjs';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

import { CommentType } from 'types';
import { APICommentsType } from 'api/type';

import Comment from 'components/molecules/Comment';
import CloseIcon from 'components/atoms/icons/CloseIcon';
import { useAddBlindCommentMutation } from 'api/blindComment';

type PropTypes = {
  postId: number;
  postUserId: number;
  rawComments: APICommentsType;
};

const initCommentWriter = () => ({ nickname: '', id: -1 });

const Comments = ({ postId, postUserId, rawComments }: PropTypes) => {
  const [commentWriter, setCommentWriter] = useState(initCommentWriter()); //댓글 주인
  const [comments, setComments] = useState<CommentType[]>([]);
  const [addBlindComment] = useAddBlindCommentMutation();
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const inputFocus = useCallback(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const findNickname = useCallback(
    (parentId: number) => comments.find((elem) => elem.parent_id === parentId)?.nickname ?? '',
    [comments],
  );

  const handleCloseButton = () => setCommentWriter(initCommentWriter());

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.currentTarget.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await addBlindComment({
      content: message,
      parent_id: commentWriter.id,
      post_id: postId,
    });
    setCommentWriter(initCommentWriter());
    setMessage('');
  };

  useEffect(() => {
    setComments(sortComments(insertNickname(formatComments(rawComments, postId, postUserId))));
  }, [postId, postUserId, rawComments]);

  return (
    <StyledComments>
      {comments.map((comment) => (
        <Comment
          key={comment.comment_id}
          {...comment}
          setCommentWriter={setCommentWriter}
          findNickname={findNickname}
          inputFocus={inputFocus}
        />
      ))}
      <form onSubmit={handleSubmit}>
        {commentWriter.nickname === '' && (
          <div>
            <p>`{commentWriter.nickname}에게 답글 남기는 중...`</p>
            <CloseIcon onClick={handleCloseButton} />
          </div>
        )}
        <StyledInput
          ref={inputRef}
          placeholder={
            commentWriter.nickname === '' ? '댓글 남기기...' : `@${commentWriter.nickname}`
          }
          value={message}
          onChange={handleChange}
        />
      </form>
    </StyledComments>
  );
};

const formatComments = (
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

type UserIndexType = {
  [key: number]: number;
};
const insertNickname = (rawComments: CommentType[]) => {
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
type TempCommentTypes = { reply: CommentType[] } & CommentType;
const sortComments = (comments: CommentType[]) => {
  const tempComments: TempCommentTypes[] = [];
  // 시간 순서대로 정렬
  comments.sort((a, b) => (dayjs(a.created_at).isAfter(dayjs(b.created_at)) ? 1 : -1));

  // 답글은 댓글의 자식으로 이동
  comments.forEach((comment) => {
    if (comment.parent_id === -1) {
      tempComments.push({ ...comment, reply: [] });
    } else {
      tempComments.find((elem) => elem.comment_id === comment.parent_id)?.reply.push(comment);
    }
  });

  // 자식으로 있던 댓글을 분리
  const result: CommentType[] = tempComments.reduce(
    (prev: CommentType[], current: TempCommentTypes) => [...prev, current, ...current.reply],
    [],
  );
  return result;
};

const StyledComments = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  overflow-y: auto;
`;

const StyledInput = styled.input`
  width: -webkit-fill-available;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grey};
  padding: 0 10px;
`;

export default Comments;
