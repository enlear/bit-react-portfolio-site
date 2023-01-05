import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { ProjectsPage } from './projects-page';

export const LightProjectsPage = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <ProjectsPage />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);

export const DarkProjectsPage = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <ProjectsPage />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);
