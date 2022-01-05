import LoadData from 'components/molecules/LoadData/LoadData';
import PostCards from 'components/molecules/PostCards/PostCards';
import React, { useState } from 'react';
import { getDummies } from 'utils/getDummies';

const Board = () => {
  const [data, setData] = useState<ReturnType<typeof getDummies>>([]);

  const load = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setData((data) => [...data, ...getDummies()]);
  };
  return (
    <>
      <PostCards data={data} />
      <LoadData load={load} />
    </>
  );
};

export default Board;
