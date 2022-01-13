import { useGetBlindPostQuery } from 'api/blindPost';
import { PATH_POST } from 'components/utils/AppRouter';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { PostType } from 'types';
import { formatPost } from 'utils/formatPost';
import Card from 'components/molecules/Card';
import LoadingSpinner from 'components/atoms/LoadingSpinner';

type PropTypes = { page: number; size: number; addPage: () => void; className?: string };

const MainCards = ({ page, size, addPage, className }: PropTypes) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const items = useGetBlindPostQuery({ page, size });
  const [cards, setCards] = useState<PostType[]>([]);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        observer.disconnect();
        addPage();
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

  return (
    <StyledContainer ref={targetRef} className={className}>
      {items.isLoading === true && <LoadingSpinner />}
      {items.isSuccess &&
        cards.map((card) => (
          <Link to={`${PATH_POST}/${card.post_id}`} key={`${card.post_id} ${card.modified_at}`}>
            <Card {...card} />
          </Link>
        ))}
      {items.isSuccess === true && cards.length === 0 && (
        <StyledMessage>마지막 글입니다.</StyledMessage>
      )}
      {items.isError === true && <StyledMessage>데이터를 불러오는데 실패했습니다.</StyledMessage>}
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