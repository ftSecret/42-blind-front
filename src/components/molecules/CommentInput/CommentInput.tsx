import { useAddBlindCommentMutation } from 'api/blindComment';
import { APIPostType, APICommentsType } from 'api/type';
import Button from 'components/atoms/Button';
import CloseIcon from 'components/atoms/icons/CloseIcon';
import { MAX_COMMENT_COUNT } from 'constants/comment';
import { useInput } from 'hooks';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { centerRowStyle, flexRow } from 'styles/mixin';
import { isEmpty } from 'utils/isEmpty';
import { SelectedCommentType } from '../Comments/Comments';

type PropTypes = {
  postId: number;
  initSelectedComment: () => void;
  selectedComment: SelectedCommentType;
  setPostDetail: (post: APIPostType, comments: APICommentsType) => void;
  focusNewComment: () => void;
};

const CommentInput = ({
  postId,
  selectedComment,
  setPostDetail,
  initSelectedComment,
  focusNewComment,
}: PropTypes) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { value, setValue, props: inputProps } = useInput('');
  const [addBlindComment, { data }] = useAddBlindCommentMutation();
  const isUpdatedComments = useRef(false);

  useEffect(() => {
    if (selectedComment.nickname !== '') inputRef.current?.focus();
  }, [selectedComment]);

  const handleCloseButton = () => initSelectedComment();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (isEmpty(value) === true) return;
    if (value.length > MAX_COMMENT_COUNT) {
      window.alert(`댓글은 ${MAX_COMMENT_COUNT}자 이하여야합니다.`);
    }
    await addBlindComment({
      content: value,
      post_id: postId,
      parent_id: selectedComment.id,
    });
    initSelectedComment();
    setValue('');
  };

  useEffect(() => {
    if (isUpdatedComments.current === true) {
      focusNewComment();
      isUpdatedComments.current = false;
    }
  }, [data?.data.comments.length, focusNewComment]);

  useEffect(() => {
    if (data !== undefined && data.data !== undefined) {
      const { comments, ...post } = data.data;
      setPostDetail(post, comments);
      isUpdatedComments.current = true;
    }
  }, [data, setPostDetail]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      {selectedComment.nickname !== '' && (
        <StyledReplyMessage>
          <p>{`${selectedComment.nickname}에게 답글 남기는 중...`}</p>
          <StyledCloseIcon onClick={handleCloseButton} size={18} />
        </StyledReplyMessage>
      )}
      <InputDiv>
        <StyledInput
          {...inputProps}
          ref={inputRef}
          placeholder={
            selectedComment.nickname === '' ? '댓글 남기기...' : `@${selectedComment.nickname}`
          }
        />
        <SubmitButton disabled={isEmpty(value)}>입력</SubmitButton>
      </InputDiv>
    </StyledForm>
  );
};

const StyledCloseIcon = styled(CloseIcon)`
  ${centerRowStyle}
  min-width: 40px;
`;

const InputDiv = styled.div`
  ${flexRow}
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  gap: 0.3rem;
`;

const SubmitButton = styled(Button)`
  ${centerRowStyle}
  font-size:${({ theme }) => theme.fonts.size.sm};
  color: ${({ theme }) => theme.colors.red};
  background-color: rgba(0, 0, 0, 0);
  border: none;
  min-width: 40px;
  padding: 0px;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

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
  font-size: ${({ theme }) => theme.fonts.size.sm};
  padding: 0;
`;

const StyledForm = styled.form`
  position: sticky;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default CommentInput;
