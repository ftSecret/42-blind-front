import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>42 BLIND</h1>
      <h2>
        <Link to="/my/article">마이페이지</Link>
      </h2>
    </div>
  );
};

export default MainHeader;
