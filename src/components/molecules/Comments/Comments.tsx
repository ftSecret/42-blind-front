import { useState, useEffect } from 'react';
import Comment from 'components/molecules/Comment';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { useComment } from 'hooks';
import { CommentType } from 'features/dummy/dummySlice';
import { useParams } from 'react-router-dom';

export type CommentPropTypes = {
  nickname?: string;
} & CommentType;

type UserIndexType = {
  [key: number]: number;
};

const Comments = () => {
  const [comments, setComments] = useState<CommentPropTypes[]>([]);
  const { getCommentsByPostId } = useComment();
  const params = useParams();

  useEffect(() => {
    const user_idx_obj: UserIndexType = {};
    const post_id = Number.parseInt(params.postId ?? '', 10);
    const rawComments = getCommentsByPostId(post_id) as CommentPropTypes[];
    setComments(
      rawComments.map((elem) => {
        if (user_idx_obj[elem.user_id] === undefined)
          user_idx_obj[elem.user_id] = Object.keys(user_idx_obj).length + 1;
        return { ...elem, nickname: `익명${user_idx_obj[elem.user_id]}` };
      }),
    );
  }, [getCommentsByPostId, params.postId]);

  return (
    <StyledComments>
      {comments.map((comment) => (
        <Comment key={comment.comment_id} {...comment} />
      ))}
    </StyledComments>
  );
};

const StyledComments = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  overflow-y: auto;
`;

export default Comments;
