import React, { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

import { CommentType } from 'types';
import { APICommentsType, APIPostType } from 'api/type';

import Comment from 'components/molecules/Comment';
import { formatComments, insertNickname, sortComments } from './utils';
import CommentInput from '../CommentInput';

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

const Comments = ({ postId, postUserId, rawComments, setPostDetail }: PropTypes) => {
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
          setPostDetail={setPostDetail}
          setSelectedComment={setSelectedComment}
        />
      ))}
      <CommentInput
        postId={postId}
        setPostDetail={setPostDetail}
        selectedComment={selectedComment}
        initSelectedComment={initSelectedComment}
      />
    </StyledComments>
  );
};

const StyledComments = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`;

export default Comments;
