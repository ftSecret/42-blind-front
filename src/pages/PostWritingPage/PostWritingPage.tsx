import React from 'react';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import PostWritingDetail from 'components/templates/PostWritingDetail';
import { WRITING } from 'components/templates/PostDetailEdit';
import { useInput } from 'hooks/useInput';

const PostWritingPage = () => {
  const { value: title, props: titleProps } = useInput('');
  const { value: content, props: contentProps } = useInput('');

  return (
    <>
      <PostWritingHeader title={title} content={content} writingStatus={WRITING} />
      <PostWritingDetail titleProps={titleProps} contentProps={contentProps} />
    </>
  );
};

export default PostWritingPage;
