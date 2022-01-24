import { MAX_CONTENT_COUNT } from 'constants/post';
import { UseInputPropTypes } from 'hooks/useInput';
import React from 'react';
import styled from 'styled-components';
import { containerStyle, flexColumn, flexRow } from 'styles/mixin';

type PropTypes = {
  titleProps: UseInputPropTypes;
  contentProps: UseInputPropTypes;
};

const PostWriting = ({ titleProps, contentProps }: PropTypes) => {
  return (
    <WritingContainer>
      <StyledTitle>
        <input placeholder="제목" {...titleProps} />
      </StyledTitle>
      <StyledContent>
        <textarea
          placeholder="내용을 입력하세요. 페이지를 나가면 내용이 삭제됩니다."
          {...contentProps}
        />
        <ContentCount>{`${contentProps.value.length}/${MAX_CONTENT_COUNT}`}</ContentCount>
      </StyledContent>
    </WritingContainer>
  );
};

const WritingContainer = styled.main`
  ${containerStyle}
  ${flexColumn}
  margin: 0.5em auto 0.5em auto;
  gap: 1rem;
  height: -webkit-fill-available;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledTitle = styled.div`
  padding: 1em 0;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.colors.grey};

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
  flex: auto;

  & > textarea {
    flex: auto;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0);
    color: ${({ theme }) => theme.colors.default};
    font-weight: bold;
  }
`;

const ContentCount = styled.p`
  ${flexRow}
  width: -webkit-fill-available;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.default};
`;

export default PostWriting;
