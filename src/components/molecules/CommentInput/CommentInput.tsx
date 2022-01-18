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
    if (value === '') return;
    await addBlindComment({
      content: value,
      post_id: postId,
      parent_id: selectedComment.id,
    });
    initSelectedComment();
    setValue('');
  };

  useEffect(() => {
    if (data !== undefined && data.data !== undefined) {
      const { comments, ...post } = data.data;
      setPostDetail(post, comments);
    }
  }, [data, setPostDetail]);

  return (
    <StyledForm onSubmit={handleSubmit}>
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
    </StyledForm>
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
  border-style: none;
  color: ${({ theme }) => theme.colors.default};
  background-color: rgba(0, 0, 0, 0);
  font-size: 1rem;
  padding: 0 0.5rem;
`;

const StyledForm = styled.form`
  position: sticky;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default CommentInput;
