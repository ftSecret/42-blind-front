import React from "react";
// import { Link } from "react-router-dom";
import classes from "./MyHeader.module.css";

const MyHeader = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>42 BLIND</h1>
      {/* <h2>
        <Link to="/my">마이페이지</Link>
      </h2> */}
    </div>
  );
};

export default MyHeader;
