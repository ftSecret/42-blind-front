import React from 'react';

type ButtonTypes = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
const Button = ({ label, onClick, className }: ButtonTypes) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
