import React, { useEffect, useState } from 'react';
import PostDetailEdit, { EDIT } from 'components/templates/PostDetailEdit';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import { useInput } from 'hooks/useInput';
import { useLocation } from 'react-router-dom';

type PrevType = {
  title: string;
  content: string;
  postId: number;
};
const PostDetailEditPage = () => {
  const { value: title, setValue: setTitle, props: titleProps } = useInput('');
  const { value: content, setValue: setContent, props: contentProps } = useInput('');
  const [postId, setPostId] = useState(-1);
  const location = useLocation();

  useEffect(() => {
    const { title, content, postId } = location.state as PrevType;
    if (postId !== -1) {
      setPostId(postId);
      setTitle(title);
      setContent(content);
    }
  }, [location.state, setContent, setTitle]);

  return (
    <>
      <PostWritingHeader postId={postId} title={title} content={content} writingStatus={EDIT} />
      <StyledContainer>
        <WritingWrap>
          <PostDetailEdit
            title={title}
            titleProps={titleProps}
            content={content}
            contentProps={contentProps}
          />
        </WritingWrap>
      </StyledContainer>
    </>
  );
};
const StyledContainer = styled.div`
  ${containerStyle}
`;
const WritingWrap = styled.div`
  ${flexColumn};
  padding: 0.5em 0;
  gap: 1rem;
`;
export default PostDetailEditPage;
