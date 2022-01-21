import { useGetBlindPostPopularQuery } from 'api/blindPost';
import { PATH_POST } from 'components/utils/AppRouter';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import Card from 'components/molecules/Card';
import { colors } from 'styles/theme';
import { useEffect, useState } from 'react';
import { PostType } from 'types';
import { formatPost } from 'utils/formatPost';

type PropTypes = { className?: string; endLoading: () => void };

const MainPopularCards = ({ className, endLoading }: PropTypes) => {
  const posts = useGetBlindPostPopularQuery(undefined, { refetchOnMountOrArgChange: true });
  const [cards, setCards] = useState<PostType[]>([]);

  // 성공 혹은 에러를 반환 시에, 로딩 스피너를 감춘다.
  useEffect(() => {
    if (posts.isSuccess === true || posts.isError === true) endLoading();
  }, [endLoading, posts]);

  useEffect(() => {
    if (posts.isSuccess === true && posts.data) setCards(formatPost(posts.data.data));
  }, [posts]);

  if (posts.isSuccess === true && cards.length === 0) return null;
  return (
    <StyledContainer>
      {posts.isSuccess &&
        cards.map((card) => (
          <Link to={`${PATH_POST}/${card.post_id}`} key={`${card.post_id} ${card.modified_at}`}>
            <StyledPopularCard {...card} />
          </Link>
        ))}
      {posts.isError === true && <StyledMessage>인기 글을 불러오는데 실패했습니다.</StyledMessage>}
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

const StyledPopularCard = styled(Card)`
  border: 1px solid ${colors.red};
`;

export default MainPopularCards;
