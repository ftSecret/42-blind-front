import { UseInputPropTypes } from 'hooks/useInput';
import React from 'react';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';

type PropTypes = {
  titleProps: UseInputPropTypes;
  contentProps: UseInputPropTypes;
};

const PostWritingDetail = ({ titleProps, contentProps }: PropTypes) => {
  return (
    <WritingContainer>
      <StyledTitle>
        <input placeholder="제목" {...titleProps} />
      </StyledTitle>
      <StyledContent>
        <textarea placeholder="내용을 입력하세요." {...contentProps} />
      </StyledContent>
    </WritingContainer>
  );
};

const WritingContainer = styled.div`
  ${containerStyle}
  ${flexColumn};
  margin: 0.5em auto;
  padding: 0.5em;
  gap: 1rem;
  height: -webkit-fill-available;
  background-color: ${({ theme }) => theme.colors.primary};
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
  ${flexColumn}
  box-sizing: border-box;
  flex: auto;
  color: ${({ theme }) => theme.colors.default};
  padding-bottom: 3rem;

  & > textarea {
    flex: auto;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    color: ${({ theme }) => theme.colors.default};
    font-weight: bold;
    outline: none;
  }
`;

export default PostWritingDetail;
