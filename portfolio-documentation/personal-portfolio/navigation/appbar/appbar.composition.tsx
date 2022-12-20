import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Appbar } from './appbar';

export const LightAppbar = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={lightTheme()}
    >
      <Appbar />
    </ThemeProvider>
  </MemoryRouter>
);
export const DarkAppbar = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={darkTheme()}
    >
      <Appbar />
    </ThemeProvider>
  </MemoryRouter>
);
