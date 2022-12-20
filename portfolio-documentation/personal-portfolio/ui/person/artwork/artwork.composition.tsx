import React from 'react';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Artwork } from './artwork';

export const LightArtwork = () => (
  <ThemeProvider
    theme={lightTheme()}
  >
    <Artwork />
  </ThemeProvider>
);

export const DarkArtwork = () => (
  <ThemeProvider
    theme={darkTheme()}
  >
    <Artwork />
  </ThemeProvider>
);
