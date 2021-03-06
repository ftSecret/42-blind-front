import React from 'react';

type ButtonTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
  disabled?: boolean;
};

const Button = ({ onClick, className, children, disabled }: ButtonTypes) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default React.memo(Button);
