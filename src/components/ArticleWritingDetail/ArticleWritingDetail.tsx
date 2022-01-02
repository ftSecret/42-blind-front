import React from 'react';
import styled from 'styled-components';

const ArticleWritingDetail = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        <input placeholder="제목" />
      </StyledTitle>
      <StyledContent>
        <textarea placeholder="내용을 입력하세요." />
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 1rem;
  height: 80vh;
`;

const StyledTitle = styled.div`
  padding: 1rem 0rem;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: grey;
  box-sizing: border-box;

  & > input {
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    color: white;
    width: 100%;
  }
`;

const StyledContent = styled.div`
  padding: 1rem 0rem;
  box-sizing: border-box;
  height: 100%;

  & > textarea {
    font-size: 1.3rem;
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    color: white;
    width: 100%;
    height: 100%;
    outline: none;
  }
`;

export default ArticleWritingDetail;
