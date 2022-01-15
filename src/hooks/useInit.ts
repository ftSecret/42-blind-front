import { useEffect } from 'react';
import { checkHealth } from 'api/prepareAuth';
import { store } from 'app/store';
import { setUser } from 'features/user/userSlice';
import { Cookies } from 'react-cookie';
import { TOKEN_JWT } from 'constants/api';

const initUserID = async () => {
  const cookies = new Cookies();
  if (cookies.get(TOKEN_JWT) !== undefined) {
    try {
      const response = await checkHealth(cookies);
      const userId = response?.data.data.user_id;
      if (userId !== undefined) store.dispatch(setUser(userId));
      else throw new Error('헬스체크에 user_id가 없습니다.');
    } catch (error) {
      throw error;
    }
  }
};

const useInit = () => {
  //jwt가 있는지 확인 (header에서안함) -> 헬스체크해서 -> user_id 설정
  useEffect(() => {
    initUserID();
  }, []);
};

export default useInit;
