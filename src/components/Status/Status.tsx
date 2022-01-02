import React from 'react';

import ChatIcon from 'components/icons/ChatIcon';
import CheckCircleIcon from 'components/icons/CheckCircleIcon';
import ThumbUpIcon from 'components/icons/ThumbUpIcon';
import styled from 'styled-components';
import { flexRow } from 'assets/styles/mixin';

type StatusType = {
  comments: number;
  views: number;
  likes: number;
};
const Status = ({ comments, views, likes }: StatusType) => {
  return (
    <StyledStatus>
      <li>
        <ChatIcon />
        <div>{comments}</div>
      </li>
      <li>
        <CheckCircleIcon />
        <div>{views}</div>
      </li>
      <li>
        <ThumbUpIcon />
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
    align-items: baseline;
    gap: 0.2rem;
  }

  & span {
    font-size: 1em;
  }
`;

export default Status;