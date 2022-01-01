import React from 'react';
import { Link } from 'react-router-dom';
import Cards from 'components/Cards/Cards';
import Button from 'components/Button/Button';
import MainHeader from 'components/MainHeader/MainHeader';
import styled from 'styled-components';

const MainPage = () => {
  const onClick = () => {
    console.log('clicked');
  };

  // TODO: 해당 주석은 추후에 삭제될 예정
  // const { data, error, isLoading } = usePostBlindBoardQuery('blindBoardAPI');
  // useEffect(() => {
  //   if (isLoading === true) console.log('로딩 중...');
  //   if (error) console.log(error);
  //   if (data) console.log(data);
  // }, [data, error, isLoading]);

  return (
    <section>
      <MainHeader />
      <Cards />
      <Link to="/article-writing">
        <StyledWriteButton onClick={onClick} label={'글쓰기'} />
      </Link>
    </section>
  );
};

// TODO: 여기서 white같은 값들이 테마에 맞는 색으로 변경되어야함. 논의 필요.
// 버튼을 어디에 저장할 것인지...?
const StyledWriteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 100px;
  height: 50px;
  position: sticky;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  font-weight: 500;
`;

export default MainPage;
