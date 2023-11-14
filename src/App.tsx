import { ThemeProvider } from 'styled-components';
import { baseTheme } from './styles/theme/theme';
import { GlobalStyles } from './styles/global';
import { AuthPage } from './ui/pages/auth/AuthPage';
import type { FC } from 'react';

export const App: FC = () => (
  <ThemeProvider theme={baseTheme}>
    <GlobalStyles />
    <AuthPage />
  </ThemeProvider>
);
