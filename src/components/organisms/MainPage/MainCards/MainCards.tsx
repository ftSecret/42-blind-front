import { useGetBlindPostQuery } from 'api/blindPost';
import { PATH_POST } from 'components/utils/AppRouter';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import { PostType } from 'types';
import { formatPost } from 'utils/formatPost';
import Card from 'components/molecules/Card';

type PropTypes = {
  page: number;
  size: number;
  addPage: () => void;
  className?: string;
  endLoading: () => void;
};

const MainCards = ({ page, size, addPage, className, endLoading }: PropTypes) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>();
  const posts = useGetBlindPostQuery({ page, size }, { refetchOnMountOrArgChange: true });
  const [cards, setCards] = useState<PostType[]>([]);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        observer.disconnect();
        addPage();
        endLoading();
      }
    },
    [addPage, endLoading],
  );

  useEffect(() => {
    if (posts.data !== undefined) {
      if (posts.data.data.length > 0) addPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addPage]);

  // 성공 혹은 에러를 반환 시에, 로딩 스피너를 감춘다.
  useEffect(() => {
    if (posts.isSuccess === true || posts.isError === true) endLoading();
  }, [endLoading, posts]);

  useEffect(() => {
    if (
      targetRef.current !== null &&
      posts.data !== undefined &&
      posts.data.data.length > 0 &&
      observerRef.current === undefined
    ) {
      observerRef.current = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observerRef.current.observe(targetRef?.current);
    }
    return () => observerRef.current && observerRef.current.disconnect();
  }, [posts.data, onIntersect]);

  useEffect(() => {
    if (posts.isSuccess === true) {
      setCards(formatPost(posts.data?.data));
    }
  }, [posts]);

  return (
    <StyledContainer ref={targetRef} className={className}>
      {posts.isSuccess &&
        cards.map((card) => (
          <Link to={`${PATH_POST}/${card.post_id}`} key={`${card.post_id} ${card.modified_at}`}>
            <Card {...card} />
          </Link>
        ))}
      {posts.isSuccess === true && cards.length === 0 && (
        <StyledMessage>마지막 글입니다.</StyledMessage>
      )}
      {posts.isError === true && <StyledMessage>데이터를 불러오는데 실패했습니다.</StyledMessage>}
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
  width: 100%;
`;

export default MainCards;
