import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from 'components/atoms/icons/ArrowBackIcon';
import styled from 'styled-components';
import Header from 'components/molecules/Header/Header';
import Typography from 'components/atoms/Typography/Typography';

const PostDetailHeader = ({ content }: { content: string }) => {
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const items = useMemo(
    () => ({
      left: <StyledArrowBackIcon onClick={goBack} />,
      middle: (
        <Typography size="sm" weight="bold">
          {content}
        </Typography>
      ),
    }),
    [content, goBack],
  );

  return <Header items={items} />;
};

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default PostDetailHeader;
