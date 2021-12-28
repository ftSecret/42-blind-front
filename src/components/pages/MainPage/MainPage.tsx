import React from 'react';
import Cards from '../../Cards/Cards';
import MainHeader from '../../MainHeader/MainHeader';
import classes from './MainPage.module.css';
const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <Cards />
      <button className={classes.writeButton}>글쓰기</button>
    </div>
  );
};

export default MainPage;
