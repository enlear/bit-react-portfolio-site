import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { About } from './about';

export const LightAbout = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <About />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);

export const DarkAbout = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <About />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);
