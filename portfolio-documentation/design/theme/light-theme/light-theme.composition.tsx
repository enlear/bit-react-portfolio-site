import React from 'react';
import { Button } from '@mui/material';
import { lightTheme } from './light-theme';
import { ThemeProvider } from '@mui/material';

export function LightTheme() {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Button>
        Hello, Light Theme.
      </Button>
    </ThemeProvider>
  );
}
