import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Button from 'components/atoms/Button';
import Header from 'components/molecules/Header';
import CloseIcon from 'components/atoms/icons/CloseIcon';
import Typography from 'components/atoms/Typography';
import { usePost } from 'hooks';
import { EDIT, WRITING } from 'components/templates/PostDetailEdit';

type PropTypes = {
  postId?: number;
  content: string;
  title: string;
  type: typeof EDIT | typeof WRITING;
};
const PostWritingHeader = ({ postId, content, title, type }: PropTypes) => {
  const navigate = useNavigate();
  const { addPost, modifyPost } = usePost();

  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSubmit = useCallback(() => {
    if (type === WRITING) {
      addPost(title, content);
      window.alert('작성되었습니다.');
    } else if (postId !== undefined && type === EDIT) {
      modifyPost(postId, title, content);
      window.alert('수정되었습니다.');
    }
    navigate(-1);
  }, [addPost, content, modifyPost, navigate, postId, title, type]);

  const items = useMemo(
    () => ({
      left: <CloseIcon onClick={handleClose} />,
      middle: <Typography size="base" weight="bold" children={type} />,
      right: <StyledSubmitButton children="완료" onClick={handleSubmit} />,
    }),
    [handleClose, handleSubmit, type],
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
