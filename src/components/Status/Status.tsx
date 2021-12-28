import React from 'react';

import classes from './Status.module.css';

import ChatIcon from '../icons/ChatIcon';
import CheckCircleIcon from '../icons/CheckCircleIcon';
import ThumbUpIcon from '../icons/ThumbUpIcon';

type StatusType = {
  comments: number;
  views: number;
  likes: number;
};
const Status = ({ comments, views, likes }: StatusType) => {
  return (
    <ul className={classes.status}>
      <li>
        <ChatIcon className={classes.icon} />
        <div>{comments}</div>
      </li>
      <li>
        <CheckCircleIcon className={classes.icon} />
        <div>{views}</div>
      </li>
      <li>
        <ThumbUpIcon className={classes.icon} />
        <div>{likes}</div>
      </li>
    </ul>
  );
};

export default Status;
