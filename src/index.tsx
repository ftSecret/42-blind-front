import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Providers from 'components/utils/Providers';

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root'),
);
