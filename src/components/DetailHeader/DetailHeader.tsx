import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '../icons/ArrowBackIcon';
import classes from './DetailHeader.module.css';
const DetailHeader = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <section className={classes.header}>
      <span onClick={goBack}>
        <ArrowBackIcon className={classes.icon} />
      </span>
      <h1>42 블라인드 익명 게시판</h1>
    </section>
  );
};

export default DetailHeader;
