import React, { useState } from 'react';

export const useInput = <
  T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement | HTMLTextAreaElement,
>(
  initialValue: string,
  onChange?: React.ChangeEventHandler<T>,
) => {
  const [value, setValue] = useState(initialValue);

  const handleChange: React.ChangeEventHandler<T> =
    onChange === undefined
      ? (event) => {
          setValue(event.target.value);
        }
      : onChange;

  return { value, onChange: handleChange };
};
