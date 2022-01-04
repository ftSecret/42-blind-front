import React from 'react';
import PostWritingHeader from 'components/organisms/PostWritingHeader/PostWritingHeader';
import PostWritingDetail from 'components/templates/PostWritingDetail/PostWritingDetail';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

const PostWritingPage = () => {
  return (
    <WritingWrap>
      <PostWritingHeader />
      <PostWritingDetail />
    </WritingWrap>
  );
};

const WritingWrap = styled.div`
  ${flexColumn}
  gap: 1rem;
`;

export default PostWritingPage;
