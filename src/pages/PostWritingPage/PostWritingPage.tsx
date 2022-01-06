import React from 'react';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import PostWritingDetail from 'components/templates/PostWritingDetail';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';
import { useInput } from 'hooks/useInput';

const PostWritingPage = () => {
  const { value: title, props: titleProps } = useInput('');
  const { value: content, props: contentProps } = useInput('');

  return (
    <>
      <PostWritingHeader title={title} content={content} />
      <StyledContainer>
        <WritingWrap>
          <PostWritingDetail titleProps={titleProps} contentProps={contentProps} />
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
