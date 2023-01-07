import React from 'react';
import { Button } from '@showoff/design.inputs.button';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { darkPortfolioTheme } from './dark-portfolio-theme';

export function RenderInDarkTheme() {
  return (
    <ThemeProvider
      theme={darkPortfolioTheme()}
    >
      <Button
        onClick={() => console.log('hello')}
        value="Hello, Dark Theme"
      />
    </ThemeProvider>
  )
}
