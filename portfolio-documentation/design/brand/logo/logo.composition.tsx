import React from 'react';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Logo } from './logo';

export const LightLogo = () => (
  <ThemeProvider
    theme={lightTheme()}
  >
    <Logo />
  </ThemeProvider>
);
export const DarkLogo = () => (
  <ThemeProvider
    theme={darkTheme()}
  >
    <Logo />
  </ThemeProvider>
);
