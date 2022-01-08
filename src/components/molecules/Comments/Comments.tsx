import { useState, useEffect } from 'react';
import Comment from 'components/molecules/Comment';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { useComment } from 'hooks';
import { CommentType } from 'features/dummy/dummySlice';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const { getCommentsByPostId } = useComment();
  const params = useParams();

  useEffect(() => {
    const post_id = Number.parseInt(params.postId ?? '', 10);
    setComments(getCommentsByPostId(post_id));
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
