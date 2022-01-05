import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Board from 'components/organisms/Common/Board/Board';
import MyHeader from 'components/organisms/MyPage/MyHeader/MyHeader';
import MyTabBar from 'components/organisms/MyPage/MyTabBar/MyTabBar';
import { containerStyle } from 'styles/mixin';
import styled from 'styled-components';

// TODO: route의 key값은 추후에 삭제되어야함.
const MyPage = () => {
  return (
    <div>
      <MyHeader />
      <MyTabBar />
      <StyledContainer>
        <Routes>
          <Route path="/post" element={<Board key="1" />} />
          <Route path="/comment" element={<Board key="2" />} />
        </Routes>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled.div`
  ${containerStyle}
`;

export default MyPage;
