import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from 'components/atoms/icons/ArrowBackIcon';
import styled from 'styled-components';
import Header from 'components/molecules/Header';
import Typography from 'components/atoms/Typography';
import Button from 'components/atoms/Button';

const PostDetailHeader = ({ content }: { content: string }) => {
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Header>
      <CloseButton onClick={goBack}>
        <StyledArrowBackIcon />
      </CloseButton>
      <Typography as="h1" size="sm" weight="bold">
        {content}
      </Typography>
      <Spacing />
    </Header>
  );
};

const CloseButton = styled(Button)`
  all: unset;
`;

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Spacing = styled.span`
  width: 20px;
  height: 20px;
`;

export default PostDetailHeader;
