import React from 'react';
import PostWritingHeader from 'components/organisms/PostWritingHeader/PostWritingHeader';
import PostWritingDetail from 'components/templates/PostWritingDetail/PostWritingDetail';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';

const PostWritingPage = () => {
  return (
    <>
      <PostWritingHeader />
      <StyledContainer>
        <WritingWrap>
          <PostWritingDetail />
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
