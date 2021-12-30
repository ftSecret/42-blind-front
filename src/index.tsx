import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/Global.css';
import './assets/styles/Reset.css';
import App from './App';
import Providers from 'components/utils/Providers';

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root'),
);
