import React from 'react';

import ChatIcon from 'components/atoms/icons/ChatIcon';
import ThumbUpIcon from 'components/atoms/icons/ThumbUpIcon';
import styled from 'styled-components';
import { flexRow } from 'styles/mixin';
import { colors } from 'styles/theme';
import ViewIcon from 'components/atoms/icons/ViewIcon';

type StatusType = {
  count: {
    comments?: number;
    views?: number;
    goods?: number;
  };
};
const Status = ({ count }: StatusType) => {
  return (
    <StyledStatus>
      {count.comments !== undefined && (
        <li>
          <ChatIcon color={colors.grey} />
          <p>{count.comments}</p>
        </li>
      )}
      {count.views !== undefined && (
        <li>
          <ViewIcon color={colors.blue} />
          <path>{count.views}</path>
        </li>
      )}
      {count.goods !== undefined && (
        <li>
          <ThumbUpIcon color={colors.red} />
          <p>{count.goods}</p>
        </li>
      )}
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
