import React, { useEffect } from 'react';
import PostDetailEdit, { EDIT } from 'components/templates/PostDetailEdit';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';
import PostWritingHeader from 'components/organisms/PostWriting/PostWritingHeader';
import { useInput } from 'hooks/useInput';
import { useParams } from 'react-router-dom';
import { usePost } from 'hooks';

const PostDetailEditPage = () => {
  const { value: title, setValue: setTitle, props: titleProps } = useInput('');
  const { value: content, setValue: setContent, props: contentProps } = useInput('');
  const postId = parseInt(useParams().postId ?? '');
  const { getPost } = usePost();
  useEffect(() => {
    const prevData = getPost(postId);
    if (prevData) {
      setTitle(prevData.title);
      setContent(prevData.content);
    }
  }, [getPost, postId, setContent, setTitle]);
  return (
    <>
      <PostWritingHeader postId={postId} title={title} content={content} type={EDIT} />
      <StyledContainer>
        <WritingWrap>
          <PostDetailEdit
            title={title}
            titleProps={titleProps}
            content={content}
            contentProps={contentProps}
          />
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
