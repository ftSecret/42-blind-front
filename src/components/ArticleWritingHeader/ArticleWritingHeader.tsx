import React from 'react';
import Button from 'components/Button/Button';
import CloseIcon from 'components/icons/CloseIcon';
import classes from 'components/ArticleWritingHeader/ArticleWritingHeader.module.css';
import { useNavigate } from 'react-router';

const ArticleWritingHeader = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    window.alert('작성되었습니다.');
    navigate(-1);
  };

  return (
    <div className={classes.header}>
      <CloseIcon className={classes.closeIcon} onClick={handleClose} />
      <div className={classes.title}>글 작성</div>
      <Button className={classes.submit} label="완료" onClick={handleSubmit} />
    </div>
  );
};

export default ArticleWritingHeader;
