import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';
import Typography from 'components/atoms/Typography/Typography';

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
] as const;

const TabBar = () => {
  const location = useLocation();

  return (
    <StyledContainer>
      {linkData.map((data) => (
        <Typography size={'sm'} lineHeight={'large'}>
          <Link
            to={data.to}
            key={data.to}
            className={classNames({
              selected: data.to === location.pathname,
            })}
          >
            {data.content}
          </Link>
        </Typography>
      ))}
    </StyledContainer>
  );
};

export default TabBar;

const StyledContainer = styled.div`
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
