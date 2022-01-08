import { useState, useEffect } from 'react';
import Comment from 'components/molecules/Comment';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { useComment } from 'hooks';
import { CommentType } from 'features/dummy/dummySlice';

const Comments = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const { getCommentsByPostId } = useComment();

  useEffect(() => {
    //처음에 데이터 가져오기
    setComments(getCommentsByPostId(0));
  }, [getCommentsByPostId]);

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
