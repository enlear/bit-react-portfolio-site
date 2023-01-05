import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Typography } from '@showoff/design.typography.typography';
import { Main } from './main';

export const BasicMain = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <Typography variant="h1">Hello World</Typography>
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);

export const DarkMain = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <Typography variant="h1">Hello World</Typography>
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);
