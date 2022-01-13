import React from 'react';
import { useGetBlindCommentMeQuery } from 'api/blindComment';
import Card from 'components/molecules/Card';
import { PATH_POST } from 'components/utils/AppRouter';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

const MyCommentBoard = () => {
  const myComments = useGetBlindCommentMeQuery();

  return (
    <StyledCards>
      {myComments.data?.data.map((comment) => (
        <Link key={comment.comment_id} to={`${PATH_POST}/${comment.post_id}`}>
          <Card
            title={comment.content}
            created_at={comment.created_at}
            count={{ goods: comment.goods }}
          />
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

export default MyCommentBoard;
