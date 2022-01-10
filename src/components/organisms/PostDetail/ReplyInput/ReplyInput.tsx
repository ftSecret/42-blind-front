import { useAddBlindCommentMutation } from 'api/blindComment';
import { lighten } from 'polished';
import React, { useState } from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';

type PropTypes = {
  postId: number;
  parentId?: number;
};

const ReplyInput = ({ postId, parentId = -1 }: PropTypes) => {
  const [message, setMessage] = useState('');
  const [addBlindComment] = useAddBlindCommentMutation();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      addBlindComment({ content: message, post_id: postId, parent_id: parentId });
    },
    [addBlindComment, message, parentId, postId],
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        placeholder={parentId === -1 ? '댓글을 작성하세요' : '답글을 작성하세요'}
        value={message}
        onChange={handleChange}
        parentId={parentId}
      />
    </form>
  );
};

const StyledInput = styled.input<{ parentId: number }>`
  width: -webkit-fill-available;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  background-color: ${({ theme }) => lighten(0.85, theme.colors.default)};
  color: ${({ theme }) => theme.colors.grey};
  padding: 0 10px;
  margin-left: ${({ parentId }) => (parentId !== -1 ? '2rem' : 'inherit')};
`;

export default ReplyInput;
