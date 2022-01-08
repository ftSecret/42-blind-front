import { messages } from 'constants/message';
import { useComment } from 'hooks';
import { useQueryString } from 'hooks/useQueryString';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type PropTypes = {
  postId: number;
};

export const STATE_DEFAULT = 'default';
export const STATE_MODIFY = 'modify';
export const STATE_REPLY = 'reply';

const placeholders = {
  [STATE_DEFAULT]: '댓글을 입력하세요.',
  [STATE_MODIFY]: '수정할 내용을 입력하세요.',
  [STATE_REPLY]: '답글을 입력하세요.',
} as const;

export type CommentQueryTypes = {
  state: keyof typeof placeholders;
  parentId: string;
  modifyId: string;
};

const CommentInput = ({ postId }: PropTypes) => {
  const query = useQueryString<CommentQueryTypes>();
  const state = query.state ?? STATE_DEFAULT;
  const parentId = Number.parseInt(query.parentId, 10);
  const modifyId = Number.parseInt(query.modifyId, 10);
  const [message, setMessage] = useState('');
  const { addComment, modifyComment } = useComment();
  const navigate = useNavigate();

  useEffect(() => {
    setMessage('');
  }, [state]);

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter' && message !== '') {
      switch (state) {
        case STATE_DEFAULT:
          addComment(postId, message);
          break;
        case STATE_MODIFY:
          modifyComment(modifyId, message);
          navigate(-1);
          break;
        case STATE_REPLY:
          addComment(postId, message, parentId);
          navigate(-1);
          break;
        default:
          throw new Error('잘못된 상태명입니다.');
      }
      setMessage('');
    } else if (event.key === 'Escape' && (state === STATE_REPLY || state === STATE_MODIFY)) {
      if (
        message === '' ||
        window.confirm(
          state === STATE_REPLY
            ? messages.alertCancleReplyComment
            : messages.alertCancleModifyComment,
        )
      ) {
        navigate(-1);
      }
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.currentTarget.value);
  };

  return (
    <StyledInput
      placeholder={placeholders[state]}
      value={message}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
    />
  );
};

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
