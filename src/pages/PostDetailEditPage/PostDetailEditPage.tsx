import React from 'react';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import PostDetailEdit from 'components/templates/PostDetailEdit';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';

const PostDetailEditPage = () => {
  return (
    <>
      <PostWritingHeader />
      <StyledContainer>
        <WritingWrap>
          <PostDetailEdit />
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
