import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to={`/detail/${elem.id}`}>
          <Card key={idx} {...elem} />
        </Link>
      ))}
      <LoadData load={load} />
    </div>
  );
};

export default Cards;
