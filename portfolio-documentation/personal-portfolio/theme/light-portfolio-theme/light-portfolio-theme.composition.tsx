import React from 'react';
import { Button } from '@showoff/design.inputs.button';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { lightPortfolioTheme } from './light-portfolio-theme';

export function RenderInLightTheme() {
  return (
    <ThemeProvider
      theme={lightPortfolioTheme()}
    >
      <Button
        onClick={() => console.log('hello')}
        value="Hello, Dark Theme"
      />
    </ThemeProvider>
  )
}
