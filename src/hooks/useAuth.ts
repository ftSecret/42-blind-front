import { TOKEN_REFRESH } from 'constants/api';
import { useCookies } from 'react-cookie';

const cookieName = TOKEN_REFRESH;

export const useAuth = () => {
  const [cookies] = useCookies([cookieName]);

  return cookies[cookieName] !== undefined;
};
