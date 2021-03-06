import React from 'react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import { useAppSelector } from 'app/hooks';
import { selectTheme } from 'features/theme/themeSlice';

const ThemeProviders = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => {
  const themeState = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={theme[themeState]}>
      <GlobalStyles theme={theme[themeState]} />
      {children}
    </ThemeProvider>
  );
};

const Providers = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => {
  return (
    <Provider store={store}>
      <ThemeProviders>{children}</ThemeProviders>
    </Provider>
  );
};

export default Providers;
