import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { LandingPage } from './landing-page';

export const LightLandingPage = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <LandingPage />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);

export const DarkLandingPage = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <LandingPage />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);
