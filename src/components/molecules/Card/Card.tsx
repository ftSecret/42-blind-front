import React from 'react';
import { formatDate } from 'utils/formatDate';
import Status from 'components/molecules/Status';
import styled from 'styled-components';
import { flexColumn, flexRow } from 'styles/mixin';
import { darken } from 'polished';

type PropTypes = {
  className?: string;
  title: string;
  content?: string;
  created_at: string;
  count?: {
    goods?: number;
    views?: number;
    comments?: number;
  };
};

const Card = ({ title, content, created_at, count, className, ...rest }: PropTypes) => {
  return (
    <StyledDiv className={className}>
      <StyledTitle>{title}</StyledTitle>
      {content && <StyledContent>{content}</StyledContent>}
      <StyledInfo>
        <div>{formatDate(created_at)}</div>
        {count && <Status count={count} />}
      </StyledInfo>
    </StyledDiv>
  );
};

export default Card;

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  ${flexColumn}
  border-radius: 0.3rem;
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
