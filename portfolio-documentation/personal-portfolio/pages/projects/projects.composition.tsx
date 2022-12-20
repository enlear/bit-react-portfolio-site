import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { Projects } from './projects';

export const LightProjects = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={lightTheme()}
    >
      <Main>
        <Projects />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);

export const DarkProjects = () => (
  <MemoryRouter>
    <ThemeProvider
      theme={darkTheme()}
    >
      <Main>
        <Projects />
      </Main>
    </ThemeProvider>
  </MemoryRouter>
);
