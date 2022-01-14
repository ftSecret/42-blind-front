import { useAddBlindCommentMutation } from 'api/blindComment';
import { APIPostType, APICommentsType } from 'api/type';
import CloseIcon from 'components/atoms/icons/CloseIcon';
import { useInput } from 'hooks';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { flexRow } from 'styles/mixin';
import { SelectedCommentType } from '../Comments/Comments';

type PropTypes = {
  postId: number;
  initSelectedComment: () => void;
  selectedComment: SelectedCommentType;
  setPostDetail: (post: APIPostType, comments: APICommentsType) => void;
};

const CommentInput = ({
  postId,
  selectedComment,
  setPostDetail,
  initSelectedComment,
}: PropTypes) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { value, setValue, props: inputProps } = useInput('');
  const [addBlindComment, { data }] = useAddBlindCommentMutation();

  useEffect(() => {
    if (selectedComment.nickname !== '') inputRef.current?.focus();
  }, [selectedComment]);

  const handleCloseButton = () => initSelectedComment();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await addBlindComment({
      content: value,
      post_id: postId,
      parent_id: selectedComment.id,
    });
    initSelectedComment();
    setValue('');
    if (data !== undefined && data.data !== undefined) {
      const { comments, ...post } = data.data;
      setPostDetail(post, comments);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {selectedComment.nickname !== '' && (
        <StyledReplyMessage>
          <p>{`${selectedComment.nickname}에게 답글 남기는 중...`}</p>
          <CloseIcon onClick={handleCloseButton} />
        </StyledReplyMessage>
      )}
      <StyledInput
        {...inputProps}
        ref={inputRef}
        placeholder={
          selectedComment.nickname === '' ? '댓글 남기기...' : `@${selectedComment.nickname}`
        }
      />
    </form>
  );
};

const StyledReplyMessage = styled.div`
  ${flexRow}
  align-items: center;
  padding: 0.5rem;
  justify-content: space-between;
  & span {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  width: -webkit-fill-available;
  height: 2.5rem;
  border-radius: 0.3rem;
  border-style: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.default};
  font-size: 1rem;
  padding: 0 0.5rem;
`;

export default CommentInput;
