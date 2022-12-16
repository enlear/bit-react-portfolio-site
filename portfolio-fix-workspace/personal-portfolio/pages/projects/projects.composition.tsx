import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import React from 'react';
import { Projects } from './projects';

export const LightProjects = () => (
  <ThemeProvider
    theme={lightTheme()}
  >
    <Main>
      <Projects />
    </Main>
  </ThemeProvider>
);

export const DarkProjects = () => (
  <ThemeProvider
    theme={darkTheme()}
  >
    <Main>
      <Projects />
    </Main>
  </ThemeProvider>
);
