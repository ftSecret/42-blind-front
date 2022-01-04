import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDummies } from 'utils/getDummies';
import PostCard from 'components/molecules/PostCard/PostCard';
import LoadData from 'components/molecules/LoadData/LoadData';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { PATH_POST } from 'components/utils/AppRouter';

type PropTypes = {
  data: ReturnType<typeof getDummies>;
};

const PostCards = ({ data }: PropTypes) => {
  return (
    <StyledCards>
      {data.map((elem, idx) => (
        <Link key={idx} to={`${PATH_POST}/${elem.id}`}>
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
