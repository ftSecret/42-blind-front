import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>42 BLIND</div>
      <div className={classes.list}>
        <div>실시간</div>
        <div>추천</div>
      </div>
    </div>
  );
};

export default Header;
