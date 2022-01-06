import React, { useCallback, useState } from 'react';

export type UseInputPropTypes = Pick<ReturnType<typeof useInput>, 'props'>['props'];

export const useInput = <
  T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement | HTMLTextAreaElement,
>(
  initialValue: string,
) => {
  const [value, setValue] = useState(initialValue);

  const handleChange: React.ChangeEventHandler<T> = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return { value, setValue, props: { value, onChange: handleChange } };
};
