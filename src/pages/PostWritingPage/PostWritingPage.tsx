import React from 'react';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import PostWritingDetail from 'components/templates/PostWritingDetail';
import { WRITING } from 'components/templates/PostDetailEdit';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

const PostWritingPage = () => {
  const { value: title, props: titleProps } = useInput('');
  const { value: content, props: contentProps } = useInput('');

  return (
    <Wrapper>
      <PostWritingHeader title={title} content={content} writingStatus={WRITING} />
      <PostWritingDetail titleProps={titleProps} contentProps={contentProps} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: -webkit-fill-available;
  ${flexColumn}
`;

export default PostWritingPage;
