import React, { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

import { CommentType } from 'types';
import { APICommentsType } from 'api/type';

import Comment from 'components/molecules/Comment';
import { formatComments, insertNickname, sortComments } from './utils';
import CommentInput from '../CommentInput';

type PropTypes = {
  postId: number;
  postUserId: number;
  rawComments: APICommentsType;
  refetch: () => void;
};

export type SelectedCommentType = {
  nickname: string;
  id: number;
};

const Comments = ({ postId, postUserId, rawComments, refetch }: PropTypes) => {
  const [selectedComment, setSelectedComment] = useState({ nickname: '', id: -1 }); //댓글 주인
  const [comments, setComments] = useState<CommentType[]>([]);

  const findNickname = useCallback(
    (parentId: number) => comments.find((elem) => elem.comment_id === parentId)?.nickname ?? '',
    [comments],
  );

  const initSelectedComment = useCallback(() => setSelectedComment({ nickname: '', id: -1 }), []);

  useEffect(() => {
    setComments(sortComments(insertNickname(formatComments(rawComments, postId, postUserId))));
  }, [postId, postUserId, rawComments]);

  return (
    <StyledComments>
      {comments.map((comment) => (
        <Comment
          {...comment}
          key={comment.comment_id}
          findNickname={findNickname}
          setSelectedComment={setSelectedComment}
          refetch={refetch}
        />
      ))}
      <CommentInput
        postId={postId}
        selectedComment={selectedComment}
        initSelectedComment={initSelectedComment}
        refetch={refetch}
      />
    </StyledComments>
  );
};

const StyledComments = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  overflow-y: auto;
`;

export default Comments;
