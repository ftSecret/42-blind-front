import React, { useState } from 'react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'assets/styles/theme';

const Providers = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState(darkTheme);
  const switchTheme = () => {
    const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(nextTheme);
  };
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default Providers;
