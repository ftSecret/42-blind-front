import { useAddBlindCommentMutation } from 'api/blindComment';
import CloseIcon from 'components/atoms/icons/CloseIcon';
import { useInput } from 'hooks';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { flexRow } from 'styles/mixin';
import { SelectedCommentType } from '../Comments/Comments';

type PropTypes = {
  postId: number;
  selectedComment: SelectedCommentType;
  initSelectedComment: () => void;
};

const CommentInput = ({ selectedComment, postId, initSelectedComment }: PropTypes) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { value, setValue, props: inputProps } = useInput('');
  const [addBlindComment] = useAddBlindCommentMutation();

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
  gap: 1rem;
  & span {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  width: -webkit-fill-available;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grey};
  padding: 0 10px;
`;

export default CommentInput;
