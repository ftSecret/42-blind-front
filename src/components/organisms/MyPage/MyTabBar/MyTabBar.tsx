import TabBar from 'components/molecules/TabBar';
import React from 'react';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';
import { colors } from 'styles/theme';

// TODO: ${PATH_MY}를 못 쓰는 이유 알아보기
const linkData = [
  {
    to: `/my/post`,
    content: '내 글',
  },
  {
    to: `/my/comment`,
    content: '내 댓글',
  },
];

const MyTabBar = () => {
  return <StyledTabBar items={linkData} />;
};

export default MyTabBar;

const StyledTabBar = styled(TabBar)`
  ${headerStyle}
  min-height: 0rem;
  justify-content: space-evenly;
  top: 0px;
  height: 40px;

  & p {
    height: 100%;
  }

  & a {
    box-sizing: border-box;
    display: block;
    height: 100%;
    font-size: ${({ theme }) => theme.fonts.size.sm};
    font-weight: 400;
    padding-top: 0.5rem;
    color: ${colors.grey};
  }

  & a.selected {
    color: ${({ theme }) => theme.colors.default};
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.colors.default};
  }
`;
