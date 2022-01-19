import React from 'react';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import PostWriting from 'components/templates/PostWriting';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { wrapperStyle } from 'styles/mixin';
import { POST_WRITING } from 'constants/post';

const PostWritingPage = () => {
  const { value: title, props: titleProps } = useInput('');
  const { value: content, props: contentProps } = useInput('');

  return (
    <PostWritingWrapper>
      <PostWritingHeader title={title} content={content} writingStatus={POST_WRITING} />
      <PostWriting titleProps={titleProps} contentProps={contentProps} />
    </PostWritingWrapper>
  );
};

const PostWritingWrapper = styled.div`
  ${wrapperStyle}
`;

export default PostWritingPage;
