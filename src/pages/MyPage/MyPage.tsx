import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from 'components/Cards/Cards';
import MyHeader from 'components/MyHeader/MyHeader';
import TabBar from 'components/TabBar/TabBar';

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
