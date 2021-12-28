import { formatDate } from 'utils/formatDate';

import userImage from 'assets/images/alien (2).png';

import classes from 'components/Comment/Comment.module.css';

type PropType = {
  id: number | null;
  user_id: string;
  content: string;
  created_at: Date | null;
  likes: number | null;
};
const Comment = ({
  id,
  user_id,
  content,
  created_at,
  likes,
  ...rest
}: PropType) => {
  return (
    <div className={classes.comment}>
      <div className={classes.profile}>
        <div className={classes.userImage}>
          <img alt="user" width="25" height="25" src={userImage} />
        </div>
        <h1>익명1</h1>
      </div>
      <p>{content}</p>
      <h3 className={classes.date}> {formatDate(created_at!)}</h3>
    </div>
  );
};

export default Comment;
