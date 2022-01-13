import React from 'react';
import AppRouter from 'components/utils/AppRouter';
import { formatDate } from 'utils/formatDate';

console.log('result', formatDate(new Date().toISOString()));

function App() {
  return <AppRouter />;
}

export default App;
