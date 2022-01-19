import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from 'components/atoms/icons/ArrowBackIcon';
import styled from 'styled-components';
import Header from 'components/molecules/Header';
import Typography from 'components/atoms/Typography';

const PostDetailHeader = ({ content }: { content: string }) => {
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Header>
      <StyledArrowBackIcon onClick={goBack} />
      <Typography size="sm" weight="bold">
        {content}
      </Typography>
    </Header>
  );
};

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default PostDetailHeader;
