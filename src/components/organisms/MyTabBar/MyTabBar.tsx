import TabBar from 'components/molecules/TabBar/TabBar';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';

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
  justify-content: space-evenly;
  position: sticky;
  top: 0px;
  padding: 0;
  a {
    width: 10%;
    padding: 0.1rem 0;
  }
  & a.selected {
    color: ${({ theme }) => theme.colors.default};
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.colors.default};
  }
`;

const StyledContainer = styled.div``;
