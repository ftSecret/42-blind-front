import React from 'react';
import classes from 'components/ArticleWritingDetail/ArticleWritingDetail.module.css';

const ArticleWritingDetail = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <input className={classes.titleInput} placeholder="제목" />
      </div>
      <div className={classes.content}>
        <textarea
          className={classes.contentInput}
          placeholder="내용을 입력하세요."
        />
      </div>
    </div>
  );
};

export default ArticleWritingDetail;
