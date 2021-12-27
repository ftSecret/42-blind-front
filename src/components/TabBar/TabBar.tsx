import React from "react";
import { Link } from "react-router-dom";
import classes from "./TabBar.module.css";

const TabBar = () => {
  return (
    <div className={classes.container}>
      <Link to="/my/article">내 글</Link>
      <Link to="/my/comment">내 댓글</Link>
    </div>
  );
};

export default TabBar;
