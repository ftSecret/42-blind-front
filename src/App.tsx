import React, { useEffect } from 'react';
import AppRouter from 'components/utils/AppRouter';
import { usePost } from 'hooks';

function App() {
  const { addPost } = usePost();

  useEffect(() => {
    addPost('박민주', 'ㅋㅋㅋㅋ');
    addPost('박민주', 'ㅋㅋㅋㅋ');
  }, [addPost]);
  return <AppRouter />;
}

export default App;
