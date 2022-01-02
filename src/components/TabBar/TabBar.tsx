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
  background-color: var(--black-color);
  align-items: center;
  padding: 0.5em;
  justify-content: space-around;
  font-size: 1.3rem;
  text-align: center;
  color: grey;
  position: sticky;
  top: 0px;
  & a.selected {
    color: white;
    font-weight: bold;
  }
`;
