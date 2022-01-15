import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import Button from 'components/atoms/Button';
import Header from 'components/molecules/Header';
import Typography from 'components/atoms/Typography';
import CloseIcon from 'components/atoms/icons/CloseIcon';
import { EDIT, WRITING } from 'components/templates/PostDetailEdit';

import { useAddBlindPostMutation, useEditBlindPostMutation } from 'api/blindPost';

type StatusType = typeof EDIT | typeof WRITING;

type PropTypes = {
  postId?: number;
  content: string;
  title: string;
  writingStatus: StatusType;
};
const PostWritingHeader = ({ postId, content, title, writingStatus }: PropTypes) => {
  const navigate = useNavigate();
  const [addBlindPost] = useAddBlindPostMutation();
  const [editBlindPost] = useEditBlindPostMutation();
  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSubmit = useCallback(async () => {
    if (writingStatus === WRITING) {
      await addBlindPost({ title, content });
      window.alert('작성되었습니다.');
      navigate(-1);
    } else if (postId !== undefined && writingStatus === EDIT) {
      await editBlindPost({ content, post_id: postId, title });
      window.alert('수정되었습니다.');
      navigate(-1);
    }
  }, [addBlindPost, content, editBlindPost, navigate, postId, title, writingStatus]);

  const items = useMemo(
    () => ({
      left: <StyledCloseIcon onClick={handleClose} />,
      middle: <Typography size="base" weight="bold" children={writingStatus} />,
      right: <StyledSubmitButton children="완료" onClick={handleSubmit} />,
    }),
    [handleClose, handleSubmit, writingStatus],
  );

  return <Header items={items} />;
};

export default PostWritingHeader;

const StyledSubmitButton = styled(Button)`
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.red};
  border-color: ${({ theme }) => theme.colors.white};
  border-style: none;
  color: ${({ theme }) => theme.colors.white};
  width: 4rem;
  height: 2.3rem;
  border-radius: 50px;
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
