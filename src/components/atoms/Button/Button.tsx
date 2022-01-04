import React from 'react';

type ButtonTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: JSX.Element | string;
};

const Button = ({ onClick, className, children }: ButtonTypes) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
