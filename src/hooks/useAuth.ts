import { useCookies } from 'react-cookie';

const cookieName = 'refresh';

export const useAuth = () => {
  const [cookies] = useCookies([cookieName]);

  return cookies[cookieName] !== undefined;
};
