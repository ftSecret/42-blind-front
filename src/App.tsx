import React, { useEffect } from 'react';
import AppRouter from 'components/utils/AppRouter';
import { usePost } from 'hooks';

function App() {
  const { addPost } = usePost();

  useEffect(() => {
    addPost('저기 용접하시는 분 뭘까요?', '궁금하네요');
    addPost('투썸 오늘 신기하다;;', 'ㅋㅋㅋ');
  }, [addPost]);
  return <AppRouter />;
}

export default App;
