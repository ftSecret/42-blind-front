import React from 'react';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import PostWriting from 'components/templates/PostWriting';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { POST_WRITING } from 'constants/post';

const PostWritingPage = () => {
  const { value: title, props: titleProps } = useInput('');
  const { value: content, props: contentProps } = useInput('');

  return (
    <Wrapper>
      <PostWritingHeader title={title} content={content} writingStatus={POST_WRITING} />
      <PostWriting titleProps={titleProps} contentProps={contentProps} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: -webkit-fill-available;
  ${flexColumn}
`;

export default PostWritingPage;
