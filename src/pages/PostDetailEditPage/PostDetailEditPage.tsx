import React, { useEffect } from 'react';
import PostDetailEdit from 'components/templates/PostDetailEdit';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';

const PostDetailEditPage = () => {
  useEffect(() => {});
  return (
    <>
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
