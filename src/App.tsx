import React from 'react';
import AppRouter from 'components/utils/AppRouter';
import Providers from 'components/utils/Providers';
import useInit from 'hooks/useInit';

function App() {
  useInit();

  return (
    <React.StrictMode>
      <Providers>
        <AppRouter />
      </Providers>
    </React.StrictMode>
  );
}

export default App;
