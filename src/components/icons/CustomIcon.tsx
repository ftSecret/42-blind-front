import classNames from "classnames";
import React from "react";

const CustomIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className: string;
}) => {
  return (
    <span
      className={classNames({ "material-icons": true, [className]: className })}
    >
      {iconName}
    </span>
  );
};

export default CustomIcon;
