import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDummies } from 'utils/getDummies';

import Card from 'components/Card/Card';
import LoadData from 'components/LoadData/LoadData';
import styled from 'styled-components';
import { flexColumn } from 'assets/styles/mixin';

const Cards = () => {
  const [data, setData] = useState<ReturnType<typeof getDummies>>([]);

  const load = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setData((data) => [...data, ...getDummies()]);
  };

  return (
    <StyledCards>
      {data.map((elem, idx) => (
        <Link key={idx} to={`/detail/${elem.id}`}>
          <Card {...elem} />
        </Link>
      ))}
      <LoadData load={load} />
    </StyledCards>
  );
};

const StyledCards = styled.div`
  ${flexColumn}
  align-items: center;
  padding: 0.5em;
  gap: 0.5rem;
`;

export default Cards;
