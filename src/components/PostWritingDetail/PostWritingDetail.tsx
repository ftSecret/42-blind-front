import React from 'react';
import styled from 'styled-components';

const PostWritingDetail = () => {
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
  padding: 1em;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

const StyledTitle = styled.div`
  padding: 1em 0em;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: grey;
  box-sizing: border-box;

  & > input {
    font-size: 1.2rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    color: ${({ theme }) => theme.colors.default};
    width: 100%;
  }
`;

const StyledContent = styled.div`
  padding: 1em 0em;
  box-sizing: border-box;
  height: 100%;

  & > textarea {
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    color: white;
    font-weight: bold;
    width: 100%;
    height: 100%;
    outline: none;
  }
`;

export default PostWritingDetail;
