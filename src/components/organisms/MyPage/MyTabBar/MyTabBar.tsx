import TabBar from 'components/molecules/TabBar';
import React from 'react';
import styled from 'styled-components';
import { containerStyle, flexRow, headerStyle } from 'styles/mixin';
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
  return (
    <MyTabBarContainer>
      <StyledTabBar items={linkData} />
    </MyTabBarContainer>
  );
};

const MyTabBarContainer = styled.div`
  ${headerStyle}
  padding: 0;
  min-height: 40px;

  & div {
    ${containerStyle}
    ${flexRow}
    margin: 0 auto;
    padding: 0 0.5rem;
    min-height: 0rem;
    top: 0px;
    height: 100%;

    & p {
      height: 100%;
      width: 100%;
      text-align: center;
    }

    & a {
      box-sizing: border-box;
      display: block;
      height: 100%;
      font-size: ${({ theme }) => theme.fonts.size.sm};
      font-weight: 400;
      padding: 0.5rem 0;
      color: ${colors.grey};
    }

    .selected {
      position: relative;
      color: ${({ theme }) => theme.colors.red};
      font-weight: bold;
    }

    .selected::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%);
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.red};
      border-bottom: 2px solid ${({ theme }) => theme.colors.red};
    }
  }
`;

const StyledTabBar = styled(TabBar)``;

export default MyTabBar;
