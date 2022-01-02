import classNames from 'classnames';
import React from 'react';

export type CustomIconPropTypes = {
  iconName: string;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

const CustomIcon = ({ iconName, className, ...rest }: CustomIconPropTypes) => {
  return (
    <span
      className={classNames({
        'material-icons': true,
        [className ?? '']: className,
      })}
      {...rest}
    >
      {iconName}
    </span>
  );
};

export default CustomIcon;
