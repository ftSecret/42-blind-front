import { useEffect, useState } from 'react';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import { useInput } from 'hooks/useInput';
import { useLocation } from 'react-router-dom';
import PostWriting from 'components/templates/PostWriting';
import { POST_EDITING } from 'constants/post';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

type PrevType = {
  title: string;
  content: string;
  postId: number;
};

const PostEditingPage = () => {
  const { value: title, setValue: setTitle, props: titleProps } = useInput('');
  const { value: content, setValue: setContent, props: contentProps } = useInput('');
  const [postId, setPostId] = useState(-1);
  const location = useLocation();

  useEffect(() => {
    const { title, content, postId } = location.state as PrevType;
    if (postId !== -1) {
      setContent(content);
      setPostId(postId);
      setTitle(title);
    } else {
      throw new Error('수정 페이지의 PostId가 -1입니다.');
    }
  }, [location.state, setContent, setTitle]);

  return (
    <Wrapper>
      <PostWritingHeader
        postId={postId}
        title={title}
        content={content}
        writingStatus={POST_EDITING}
      />
      <PostWriting titleProps={titleProps} contentProps={contentProps} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: -webkit-fill-available;
  ${flexColumn}
`;

export default PostEditingPage;
