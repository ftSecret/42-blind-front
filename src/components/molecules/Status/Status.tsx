import React from 'react';

import ChatIcon from 'components/atoms/icons/ChatIcon';
import ThumbUpIcon from 'components/atoms/icons/ThumbUpIcon';
import styled from 'styled-components';
import { flexRow } from 'styles/mixin';
import { colors } from 'styles/theme';
import ViewIcon from 'components/atoms/icons/ViewIcon';

type StatusType = {
  count: {
    comments: number;
    views: number;
    likes: number;
  };
};
const Status = ({ count }: StatusType) => {
  return (
    <StyledStatus>
      <li>
        <ChatIcon color={colors.grey} />
        <div>{count.comments}</div>
      </li>
      <li>
        <ViewIcon color={colors.blue} />
        <div>{count.views}</div>
      </li>
      <li>
        <ThumbUpIcon color={colors.red} />
        <div>{count.likes}</div>
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
