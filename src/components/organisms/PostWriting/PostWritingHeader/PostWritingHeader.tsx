import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Button from 'components/atoms/Button';
import Header from 'components/molecules/Header';
import CloseIcon from 'components/atoms/icons/CloseIcon';
import Typography from 'components/atoms/Typography';
import { usePost } from 'hooks';

type PropTypes = {
  content: string;
  title: string;
};
const PostWritingHeader = ({ content, title }: PropTypes) => {
  const navigate = useNavigate();
  const { addPost } = usePost();

  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSubmit = useCallback(() => {
    addPost(title, content);
    window.alert('작성되었습니다.');
    navigate(-1);
  }, [addPost, content, navigate, title]);

  const items = useMemo(
    () => ({
      left: <CloseIcon onClick={handleClose} />,
      middle: <Typography size="base" weight="bold" children="글작성" />,
      right: <StyledSubmitButton children="완료" onClick={handleSubmit} />,
    }),
    [handleClose, handleSubmit],
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
