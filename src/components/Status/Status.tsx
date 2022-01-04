import React from 'react';

import ChatIcon from 'components/icons/ChatIcon';
import CheckCircleIcon from 'components/icons/CheckCircleIcon';
import ThumbUpIcon from 'components/icons/ThumbUpIcon';
import styled from 'styled-components';
import { flexRow } from 'styles/mixin';
import { colors } from 'styles/theme';

type StatusType = {
  comments: number;
  views: number;
  likes: number;
};
const Status = ({ comments, views, likes }: StatusType) => {
  return (
    <StyledStatus>
      <li>
        <ChatIcon color={colors.grey} />
        <div>{comments}</div>
      </li>
      <li>
        <CheckCircleIcon color={colors.blue} />
        <div>{views}</div>
      </li>
      <li>
        <ThumbUpIcon color={colors.red} />
        <div>{likes}</div>
      </li>
    </StyledStatus>
  );
};

const StyledStatus = styled.ul`
  ${flexRow}
  gap:0.5rem;

  & > li {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  & span {
    font-size: 1em;
  }
`;

export default Status;
