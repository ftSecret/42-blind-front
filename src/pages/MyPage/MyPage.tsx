import React from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MyHeader from 'components/organisms/MyPage/MyHeader';
import MyTabBar from 'components/organisms/MyPage/MyTabBar';
import { containerStyle, flexColumn } from 'styles/mixin';
import styled from 'styled-components';
import MyCommentCards from 'components/organisms/MyPage/MyCommentCards';
import MyPostCards from 'components/organisms/MyPage/MyPostCards';
import { useSwipeable } from 'react-swipeable';

const MyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const swipeHandler = useSwipeable({
    onSwipedRight: () => {
      if (location.pathname.includes('/comment')) navigate('/my/post', { replace: true });
      else if (location.pathname.includes('/post')) navigate(-1);
    },
    onSwipedLeft: () => {
      if (location.pathname.includes('/post')) navigate('/my/comment', { replace: true });
    },
  });

  return (
    <StyledMyPageContainer>
      <MyHeader />
      <MyTabBar />
      <StyledContainer {...swipeHandler}>
        <Routes>
          <Route path="/" element={<Navigate to="/my/post" replace />} />
          <Route path="/post" element={<MyPostCards />} />
          <Route path="/comment" element={<MyCommentCards />} />
        </Routes>
      </StyledContainer>
    </StyledMyPageContainer>
  );
};

const StyledMyPageContainer = styled.div`
  ${flexColumn}
  min-height: 100vh;
`;

const StyledContainer = styled.main`
  ${containerStyle}
  flex:auto;
`;

export default MyPage;
