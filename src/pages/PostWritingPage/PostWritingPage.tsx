import React, { useState } from 'react';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import PostWritingDetail from 'components/templates/PostWritingDetail';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';

const PostWritingPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    if (e.target.name === 'title') setTitle(e.target.value);
    if (e.target.name === 'content') setContent(e.target.value);
  };

  return (
    <>
      <PostWritingHeader title={title} content={content} />
      <StyledContainer>
        <WritingWrap>
          <PostWritingDetail title={title} content={content} handleChange={handleChange} />
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

export default PostWritingPage;
