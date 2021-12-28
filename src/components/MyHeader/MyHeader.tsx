import React from 'react';
import { Link } from 'react-router-dom';
import classes from 'components/MyHeader/MyHeader.module.css';

const MyHeader = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        <Link to="/">42 BLIND</Link>
      </h1>
    </div>
  );
};

export default MyHeader;
