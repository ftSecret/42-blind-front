import { useGetBlindPostMeQuery } from 'api/blindPost';
import { PATH_POST } from 'components/utils/AppRouter';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PostType } from 'types';
import { formatPost } from 'utils/formatPost';
import Card from 'components/molecules/Card';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import { StyledCardsSection } from 'components/organisms/MainPage/MainCards/MainCards';

type PropTypes = { className?: string };

const MyPostCards = ({ className }: PropTypes) => {
  const myPosts = useGetBlindPostMeQuery(undefined, { refetchOnMountOrArgChange: true });
  const [cards, setCards] = useState<PostType[]>([]);

  useEffect(() => {
    if (myPosts.isSuccess === true) setCards(formatPost(myPosts.data?.data));
  }, [myPosts]);

  return (
    <StyledCardsSection className={className}>
      {myPosts.isLoading === true && <LoadingSpinner />}
      {myPosts.isSuccess === true &&
        cards.map((card) => (
          <Link to={`${PATH_POST}/${card.post_id}`} key={`${card.post_id} ${card.modified_at}`}>
            <Card {...card} />
          </Link>
        ))}
      {myPosts.isError === true && <StyledMessage>데이터를 불러오는데 실패했습니다.</StyledMessage>}
    </StyledCardsSection>
  );
};

const StyledMessage = styled.div`
  color: ${({ theme }) => theme.colors.default};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  border-radius: 2rem;
`;

export default MyPostCards;
