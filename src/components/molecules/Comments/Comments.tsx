import { useState, useEffect } from 'react';
import { getCommentsDummies } from 'utils/getDummies';
import Comment from 'components/molecules/Comment';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

type CommentType = {
  id: number | null;
  user_id: string;
  content: string;
  created_at: string;
  likes: number | null;
};
const Comments = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  useEffect(() => {
    //처음에 데이터 가져오기
    setComments(getCommentsDummies);
  }, []);
  return (
    <StyledComments>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
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
