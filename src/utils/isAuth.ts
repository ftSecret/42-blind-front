import { Cookies } from 'react-cookie';

export const isAuth = () => {
  const cookies = new Cookies();
  return cookies.get('jwt') !== undefined;
};
