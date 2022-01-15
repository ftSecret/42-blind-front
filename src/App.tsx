import React from 'react';
import AppRouter from 'components/utils/AppRouter';
import Providers from 'components/utils/Providers';
import useInit from 'hooks/useInit';

function App() {
  useInit();

  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
