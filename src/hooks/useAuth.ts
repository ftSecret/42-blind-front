import { useCookies } from 'react-cookie';

const cookieName = 'jwt';

export const useAuth = () => {
  const [cookies] = useCookies([cookieName]);

  return cookies !== undefined;
};
