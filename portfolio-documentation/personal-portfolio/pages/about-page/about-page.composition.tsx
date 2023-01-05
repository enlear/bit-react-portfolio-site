import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { AboutPage } from './about-page';

export const LightAboutPage = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <AboutPage />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);

export const DarkAboutPage = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <AboutPage />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);
