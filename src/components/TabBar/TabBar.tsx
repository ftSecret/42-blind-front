import React from 'react';
import { Link } from 'react-router-dom';
import classes from './TabBar.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkData = [
  {
    to: '/my/article',
    content: '내 글',
  },
  {
    to: '/my/comment',
    content: '내 댓글',
  },
] as const;

const TabBar = () => {
  const location = useLocation();

  return (
    <div className={classes.container}>
      {linkData.map((data) => (
        <Link
          to={data.to}
          key={data.to}
          className={classNames({
            [classes.selected]: data.to === location.pathname,
          })}
        >
          {data.content}
        </Link>
      ))}
    </div>
  );
};

export default TabBar;
