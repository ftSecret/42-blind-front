import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDummies } from 'utils/getDummies';

import Card from 'components/Card/Card';
import classes from 'components/Cards/Cards.module.css';
import LoadData from 'components/LoadData/LoadData';

const Cards = () => {
  const [data, setData] = useState<ReturnType<typeof getDummies>>([]);

  const load = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setData((data) => [...data, ...getDummies()]);
  };

  return (
    <div className={classes.Cards}>
      {data.map((elem, idx) => (
        <Link key={idx} to={`/detail/${elem.id}`}>
          <Card {...elem} />
        </Link>
      ))}
      <LoadData load={load} />
    </div>
  );
};

export default Cards;
