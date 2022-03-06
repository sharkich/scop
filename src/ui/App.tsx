import { FC } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { AppRouter } from './AppRouter';
import { DARK_THEME } from './AppTheme';
import { RootStoreProvider } from './stores/providers/RootStoreProvider';

export const App: FC = () => {
  return (
    <RootStoreProvider>
      <ThemeProvider theme={DARK_THEME}>
        <CssBaseline enableColorScheme />
        <AppRouter />
      </ThemeProvider>
    </RootStoreProvider>
  );
};
