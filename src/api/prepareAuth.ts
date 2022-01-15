import axios from 'axios';
import { PATH_LOGIN } from 'components/utils/AppRouter';
import { TOKEN_REFRESH, TOKEN_JWT } from 'constants/api';
import { env } from 'constants/env';
import { Cookies } from 'react-cookie';

export const checkHealth = async (cookies: Cookies = new Cookies()) => {
  if (env.url.blindAPI) {
    return await axios.get(env.url.blindAPI, {
      withCredentials: true,
      headers: {
        authorization: `refresh ${cookies.get(TOKEN_REFRESH)}`,
      },
    });
  }
};

export const prepareAuth = async (headers: Headers) => {
  const cookies = new Cookies();

  if (cookies.get('refresh') === undefined) {
    // 로그인 화면으로 이동
    window.location.href = `${document.location.origin}${PATH_LOGIN}`;
    return headers;
  } else if (cookies.get(TOKEN_JWT) === undefined) {
    // 헬스체크 api 호출
    try {
      await checkHealth(cookies);
    } catch {
      throw new Error('jwt를 가져오는데 실패했습니다.');
    }
  }
  if (cookies.get(TOKEN_JWT) !== undefined)
    headers.set('authorization', `bearer ${cookies.get(TOKEN_JWT)}`);
  return headers;
};
