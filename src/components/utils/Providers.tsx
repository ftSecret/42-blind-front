import React from 'react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'assets/styles/theme';
import GlobalStyles from 'assets/styles/GlobalStyles';

const Providers = ({ children }: { children: JSX.Element }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
        <GlobalStyles />
      </Provider>
    </React.StrictMode>
  );
};

export default Providers;
