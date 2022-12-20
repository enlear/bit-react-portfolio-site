import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { LinkText } from './link-text';

export const LightLinkText = () => {
  return (
    <MemoryRouter>
      <ThemeProvider
        theme={lightTheme()}
      >
        <LinkText
          url='https://www.enlear.com'
          fontSize={22}
          iconSize='medium'
          fontWeight={400}
          linkText="Hello, Link Text" />
      </ThemeProvider>
    </MemoryRouter>
  );
}

export const DarkLinkText = () => {
  return (
    <MemoryRouter >
      <ThemeProvider
        theme={darkTheme()}
      >
        <LinkText
          url='https://www.enlear.com'
          fontSize={22}
          iconSize='medium'
          fontWeight={400}
          linkText="Hello, Link Text" />
      </ThemeProvider>
    </MemoryRouter >

  );
}

