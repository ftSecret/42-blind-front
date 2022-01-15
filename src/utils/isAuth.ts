import { TOKEN_REFRESH } from 'constants/api';
import { Cookies } from 'react-cookie';

export const isAuth = () => {
  const cookies = new Cookies();
  return cookies.get(TOKEN_REFRESH) !== undefined;
};
