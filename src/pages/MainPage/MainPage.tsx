import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import MainHeader from 'components/organisms/MainHeader/MainHeader';
import styled from 'styled-components';
import { PATH_POST_WRITING } from 'components/utils/AppRouter';
import Board from 'components/organisms/Board/Board';
import { containerStyle } from 'styles/mixin';

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
      <StyledContainer>
        <Board />
        <Link to={PATH_POST_WRITING}>
          <StyledWriteButton onClick={onClick} children={'글쓰기'} />
        </Link>
      </StyledContainer>
    </section>
  );
};

// TODO: 여기서 white같은 값들이 테마에 맞는 색으로 변경되어야함. 논의 필요.
// 버튼을 어디에 저장할 것인지...?

const StyledContainer = styled.div`
  ${containerStyle}
`;

const StyledWriteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  width: 80px;
  height: 40px;
  position: sticky;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  border-radius: 50px;
  border: none;
  font-weight: bold;
`;

export default MainPage;
