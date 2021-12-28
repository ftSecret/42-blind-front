import { useState, useEffect } from 'react';
import { getCommentsDummies } from 'utils/getDummies';
import Comment from 'components/Comment/Comment';
import classes from 'components/Comments/Comments.module.css';

type CommentType = {
  id: number | null;
  user_id: string;
  content: string;
  created_at: Date | null;
  likes: number | null;
};
const Comments = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  useEffect(() => {
    //처음에 데이터 가져오기
    setComments(getCommentsDummies);
  }, []);
  return (
    <div className={classes.comments}>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default Comments;
