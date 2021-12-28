import React from 'react';
import { Link } from 'react-router-dom';

import Cards from 'components/Cards/Cards';
import Button from 'components/Button/Button';
import MainHeader from 'components/MainHeader/MainHeader';
import classes from 'components/pages/MainPage/MainPage.module.css';

const MainPage = () => {
  const onClick = () => {
    console.log('clicked');
  };
  return (
    <section>
      <MainHeader />
      <Cards />
      <Link to="/article-writing">
        <Button
          onClick={onClick}
          className={classes.writeButton}
          label={'글쓰기'}
        />
      </Link>
    </section>
  );
};

export default MainPage;
