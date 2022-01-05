import { useCallback, useState } from 'react';
import { getDummies, PostCardType } from 'utils/getDummies';

export const useDummies = () => {
  const [items, setItems] = useState<PostCardType[]>([]);

  const load = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    setItems((items) => [...items, ...getDummies()]);
  }, []);

  return { items, load };
};
