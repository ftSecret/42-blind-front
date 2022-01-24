import React, { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

import { CommentType } from 'types';
import { APICommentsType, APIPostType } from 'api/type';

import Comment from 'components/molecules/Comment';
import { formatComments, insertNickname, sortComments } from './utils';
import CommentInput from '../CommentInput';
import { useAppSelector } from 'app/hooks';
import { selectUserId } from 'features/user/userSlice';

type PropTypes = {
  postId: number;
  postUserId: number;
  rawComments: APICommentsType;
  setPostDetail: (post: APIPostType, comments: APICommentsType) => void;
};

export type SelectedCommentType = {
  nickname: string;
  id: number;
};

const focusComment = (id: number) => {
  const target = document.querySelector<HTMLDivElement>(`#comment_${id}`);
  if (target) target.focus();
};

const getMaxCommentId = (comments: CommentType[], userId: number) =>
  comments.reduce(
    (big, cur) => (userId === cur.user_id && big < cur.comment_id ? cur.comment_id : big),
    -100,
  );

const Comments = ({ postId, postUserId, rawComments, setPostDetail }: PropTypes) => {
  const [selectedComment, setSelectedComment] = useState({ nickname: '', id: -1 }); //댓글 주인
  const [comments, setComments] = useState<CommentType[]>([]);
  const userId = useAppSelector(selectUserId);

  const findNickname = useCallback(
    (parentId: number) => comments.find((elem) => elem.comment_id === parentId)?.nickname ?? '',
    [comments],
  );

  const initSelectedComment = useCallback(() => setSelectedComment({ nickname: '', id: -1 }), []);

  useEffect(() => {
    setComments(sortComments(insertNickname(formatComments(rawComments, postId, postUserId))));
  }, [postId, postUserId, rawComments]);

  const focusNewComment = useCallback(() => {
    focusComment(getMaxCommentId(comments, userId));
  }, [comments, userId]);

  return (
    <StyledComments>
      {comments.map((comment) => (
        <Comment
          {...comment}
          key={comment.comment_id}
          findNickname={findNickname}
          setPostDetail={setPostDetail}
          setSelectedComment={setSelectedComment}
        />
      ))}
      <CommentInput
        postId={postId}
        setPostDetail={setPostDetail}
        selectedComment={selectedComment}
        initSelectedComment={initSelectedComment}
        focusNewComment={focusNewComment}
      />
    </StyledComments>
  );
};

const StyledComments = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default Comments;
