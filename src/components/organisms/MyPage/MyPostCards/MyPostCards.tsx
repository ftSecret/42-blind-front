import { useGetBlindPostMeQuery } from 'api/blindPost';
import { PATH_POST } from 'components/utils/AppRouter';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { PostType } from 'types';
import { formatPost } from 'utils/formatPost';
import Card from 'components/molecules/Card';
import LoadingSpinner from 'components/atoms/LoadingSpinner';

type PropTypes = { className?: string };

const MainCards = ({ className }: PropTypes) => {
  const myPosts = useGetBlindPostMeQuery();
  const [cards, setCards] = useState<PostType[]>([]);

  useEffect(() => {
    if (myPosts.isSuccess === true) setCards(formatPost(myPosts.data?.data));
  }, [myPosts]);

  return (
    <StyledContainer className={className}>
      {myPosts.isLoading === true && <LoadingSpinner />}
      {myPosts.isSuccess === true &&
        cards.map((card) => (
          <Link to={`${PATH_POST}/${card.post_id}`} key={`${card.post_id} ${card.modified_at}`}>
            <Card {...card} />
          </Link>
        ))}
      {myPosts.isError === true && <StyledMessage>데이터를 불러오는데 실패했습니다.</StyledMessage>}
    </StyledContainer>
  );
};

const StyledMessage = styled.div`
  color: ${({ theme }) => theme.colors.default};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  border-radius: 2rem;
`;

const StyledContainer = styled.div`
  ${flexColumn}
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export default MainCards;
