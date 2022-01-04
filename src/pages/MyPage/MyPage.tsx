import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from 'components/molecules/Cards/Cards';
import MyHeader from 'components/organisms/MyHeader/MyHeader';
import TabBar from 'components/organisms/TabBar/TabBar';

// TODO: route의 key값은 추후에 삭제되어야함.
const MyPage = () => {
  return (
    <div>
      <MyHeader />
      <TabBar />
      <Routes>
        <Route path="/article" element={<Cards key="1" />} />
        <Route path="/comment" element={<Cards key="2" />} />
      </Routes>
    </div>
  );
};

export default MyPage;
