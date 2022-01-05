import React from 'react';
import { formatDate } from 'utils/formatDate';

import Status from 'components/molecules/Status/Status';
import styled from 'styled-components';
import { flexColumn, flexRow } from 'styles/mixin';
import { darken } from 'polished';
import { PostCardType } from 'utils/getDummies';
import Typography from 'components/atoms/Typography/Typography';

const PostCard = ({ title, content, created_at, count, ...rest }: PostCardType) => {
  return (
    <StyledDiv>
      <Typography>{rest.post_id.toString()}</Typography>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{content}</StyledContent>

      <StyledInfo>
        <div>{formatDate(created_at)}</div>
        <Status count={count} />
      </StyledInfo>
    </StyledDiv>
  );
};

export default PostCard;

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  ${flexColumn}
  border-radius: 0.3rem;
  transition: 0.5s;
  padding: 0.5em;
  width: 100%;
  gap: 1em;

  &:hover {
    cursor: pointer;
  }
`;

const StyledInfo = styled.div`
  ${flexRow}
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.default};
`;

const StyledContent = styled.div`
  width: 100%;
  line-height: 1.2;
  color: ${({ theme }) => darken(0.3, theme.colors.default)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.default};
  font-weight: bold;
  font-size: 1.2em;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
