import React from 'react';
import MainHeader from 'components/organisms/MainPage/MainHeader';
import MainBoard from 'components/organisms/MainPage/MainBoard';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const MainPage = () => {
  const navigate = useNavigate();
  const swipeHandler = useSwipeable({
    onSwipedLeft: () => {
      navigate('/my');
    },
  });

  return (
    <>
      <MainHeader />
      <MainBoard {...swipeHandler} />
    </>
  );
};

export default MainPage;
