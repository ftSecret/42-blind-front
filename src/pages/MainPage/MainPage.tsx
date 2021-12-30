import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from 'components/Cards/Cards';
import Button from 'components/Button/Button';
import MainHeader from 'components/MainHeader/MainHeader';
import classes from './MainPage.module.css';
import { useGetBlindBoardQuery } from 'api/blindBoard';

const MainPage = () => {
  const onClick = () => {
    console.log('clicked');
  };

  const { data, error, isLoading } = useGetBlindBoardQuery('blindBoardAPI');

  useEffect(() => {
    if (isLoading === true) console.log('로딩 중...');
    if (error) console.log(error);
    if (data) console.log(data);
  }, [data, error, isLoading]);

  return (
    <section>
      <MainHeader />
      <Cards />
      <Link to="/article-writing">
        <Button onClick={onClick} className={classes.writeButton} label={'글쓰기'} />
      </Link>
    </section>
  );
};

export default MainPage;
