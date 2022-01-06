import { usePost } from 'hooks';
import { useInput } from 'hooks/useInput';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PostDetailEdit = () => {
  const { getPost } = usePost();
  const postId = parseInt(useParams().postId ?? '');
  const { value: title, setValue: setTitle, props: titleProps } = useInput('');
  const { value: content, setValue: setContent, props: contentProps } = useInput('');

  useEffect(() => {
    const prevData = getPost(postId);
    if (prevData) {
      setTitle(prevData.title);
      setContent(prevData.content);
    }
  }, []);
  return (
    <WritingContainer>
      <StyledTitle>
        <input placeholder={title} {...titleProps} />
      </StyledTitle>
      <StyledContent>
        <textarea placeholder={content} {...contentProps} />
      </StyledContent>
    </WritingContainer>
  );
};

const WritingContainer = styled.div`
  padding: 0.5rem;
  height: 90vh;
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
  padding: 1em 0;
  box-sizing: border-box;
  height: 100%;
  color: ${({ theme }) => theme.colors.default};

  & > textarea {
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    color: ${({ theme }) => theme.colors.default};
    font-weight: bold;
    width: 100%;
    height: 100%;
    outline: none;
  }
`;

export default PostDetailEdit;
