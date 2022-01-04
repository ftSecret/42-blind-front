import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { flexRow } from 'assets/styles/mixin';

const linkData = [
  {
    to: '/my/article',
    content: '내 글',
  },
  {
    to: '/my/comment',
    content: '내 댓글',
  },
] as const;

const TabBar = () => {
  const location = useLocation();

  return (
    <StyledContainer>
      {linkData.map((data) => (
        <Link
          to={data.to}
          key={data.to}
          className={classNames({
            selected: data.to === location.pathname,
          })}
        >
          {data.content}
        </Link>
      ))}
    </StyledContainer>
  );
};

export default TabBar;

const StyledContainer = styled.div`
  ${flexRow}
  background-color:   ${({ theme }) => theme.colors.primary};
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  text-align: center;
  line-height: 2;
  color: grey;
  position: sticky;
  top: 0px;
  a {
    width: 10%;
  }
  & a.selected {
    color: ${({ theme }) => theme.colors.font};
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.colors.font};
  }
`;
