import React from 'react';
import Button from 'components/Button/Button';
import CloseIcon from 'components/icons/CloseIcon';
import classes from 'components/ArticleWritingHeader/ArticleWritingHeader.module.css';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { flexRow } from 'assets/styles/mixin';

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

const StyledHeader = styled.div`
  ${flexRow}
  width: 100%;
  justify-content: space-between;
  height: 50px;
  text-align: center;
  align-items: center;
  padding: 0 14px;
`;

/*
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  text-align: center;
  align-items: center;
  padding: 0 14px;
  box-sizing: border-box;
}

.title {
  font-size: 1.3rem;
}

.submit {
  background-color: rgb(228, 55, 55);
  border-color: white;
  border-style: solid;
  border-width: 1px;
  color: white;
  width: 5rem;
  height: 3rem;
  border-radius: 0.5rem;
}

*/
