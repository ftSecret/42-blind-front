import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from 'components/icons/ArrowBackIcon';
import classes from 'components/DetailHeader/DetailHeader.module.css';

const DetailHeader = ({ content }: { content: string }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <section className={classes.header}>
      <span onClick={goBack}>
        <ArrowBackIcon className={classes.icon} />
      </span>
      <h1>{content}</h1>
    </section>
  );
};

export default DetailHeader;
