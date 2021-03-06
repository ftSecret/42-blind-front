import React from 'react';
import { useGetBlindCommentMeQuery } from 'api/blindComment';
import Card from 'components/molecules/Card';
import { PATH_POST } from 'components/utils/AppRouter';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import { StyledCardsSection } from 'components/organisms/MainPage/MainCards/MainCards';

const MyCommentCards = () => {
  const myComments = useGetBlindCommentMeQuery(undefined, { refetchOnMountOrArgChange: true });

  return (
    <StyledCardsSection>
      {myComments.isLoading === true && myComments.data === undefined && <LoadingSpinner />}
      {myComments.data !== undefined &&
        myComments.data?.data.map((comment) => (
          <Link key={comment.comment_id} to={`${PATH_POST}/${comment.post_id}`}>
            <Card
              title={comment.content}
              created_at={comment.created_at}
              count={{ goods: comment.goods }}
            />
          </Link>
        ))}
      {myComments.isError === true && (
        <StyledMessage>데이터를 불러오는데 실패했습니다.</StyledMessage>
      )}
    </StyledCardsSection>
  );
};

const StyledMessage = styled.div`
  color: ${({ theme }) => theme.colors.default};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  border-radius: 2rem;
`;

export default MyCommentCards;
