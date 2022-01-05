import React from 'react';
import { Link } from 'react-router-dom';
import { getDummies } from 'utils/getDummies';
import PostCard from 'components/molecules/PostCard/PostCard';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { PATH_POST } from 'components/utils/AppRouter';

type PropTypes = {
  items: ReturnType<typeof getDummies>;
};

const PostCards = ({ items }: PropTypes) => {
  return (
    <StyledCards>
      {items.map((elem, idx) => (
        <Link key={idx} to={`${PATH_POST}/${elem.post_id}`}>
          <PostCard {...elem} />
        </Link>
      ))}
    </StyledCards>
  );
};

const StyledCards = styled.div`
  ${flexColumn}
  align-items: center;
  gap: 0.5rem;
`;

export default PostCards;
