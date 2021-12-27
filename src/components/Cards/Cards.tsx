import React, { useState } from "react";
import { getDummies } from "../../utils/getDummies";
import Card from "../Card/Card";
import LoadData from "../LoadData/LoadData";
import classes from "./Cards.module.css";

const Cards = () => {
  const [data, setData] = useState<ReturnType<typeof getDummies>>([]);

  const load = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setData((data) => [...data, ...getDummies()]);
  };

  return (
    <div className={classes.Cards}>
      {data.map((elem, idx) => (
        <Card key={idx} {...elem} />
      ))}
      <LoadData load={load} />
    </div>
  );
};

export default Cards;
