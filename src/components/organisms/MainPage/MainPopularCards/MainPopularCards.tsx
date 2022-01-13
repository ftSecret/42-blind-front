import { useGetBlindPostPopularQuery } from 'api/blindPost';
import { PATH_POST } from 'components/utils/AppRouter';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { PostType } from 'types';
import { formatPost } from 'utils/formatPost';
import Card from 'components/molecules/Card';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import { colors } from 'styles/theme';

type PropTypes = { addPage?: () => void; className?: string };

const MainPopularCards = ({ addPage, className }: PropTypes) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const items = useGetBlindPostPopularQuery();
  const [cards, setCards] = useState<PostType[]>([]);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        observer.disconnect();
        if (addPage) addPage();
      }
    },
    [addPage],
  );

  useEffect(() => {
    if (items.isSuccess === true && observer.current === undefined) {
      setCards(formatPost(items.data?.data));
      if (targetRef?.current && items.data?.data.length !== 0) {
        observer.current = new IntersectionObserver(onIntersect, {
          threshold: 0.5,
        });
        observer.current.observe(targetRef?.current);
      }
      return () => observer.current && observer.current.disconnect();
    }
  }, [onIntersect, items]);

  if (items.isSuccess === true && cards.length === 0) return null;
  return (
    <StyledContainer ref={targetRef} className={className}>
      {items.isLoading === true && <LoadingSpinner />}
      {items.isSuccess &&
        cards.map((card) => (
          <Link to={`${PATH_POST}/${card.post_id}`} key={`${card.post_id} ${card.modified_at}`}>
            <StyledPopularCard {...card} />
          </Link>
        ))}
      {items.isError === true && <StyledMessage>인기 글을 불러오는데 실패했습니다.</StyledMessage>}
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

const StyledPopularCard = styled(Card)`
  border: 1px solid ${colors.red};
`;

export default MainPopularCards;
