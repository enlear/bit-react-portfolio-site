import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { ContactPage } from './contact-page';

export const LightContactPage = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main
      >
        <ContactPage />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);

export const DarkContactPage = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <ContactPage />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);
