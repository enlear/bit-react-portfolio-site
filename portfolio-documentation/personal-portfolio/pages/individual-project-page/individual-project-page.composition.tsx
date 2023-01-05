import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import React from 'react';
import { Routes, MemoryRouter, Route } from 'react-router-dom';
import { IndividualProjectPage } from './individual-project-page';

export const LightIndividualProjectPage = () => (
  <ThemeProvider
    theme={lightTheme()}
  >
    <Main>
      <MemoryRouter
        initialEntries={
          [
            { pathname: '/projects/1' },
          ]
        }
        initialIndex={0}
      >
        <Routes>
          <Route
            path="/projects/:id"
            element={<IndividualProjectPage />}
          >
          </Route>
        </Routes>
      </MemoryRouter>
    </Main>
  </ThemeProvider>
);

export const DarkIndividualProject = () => (
  <ThemeProvider
    theme={darkTheme()}
  >
    <Main>
      <MemoryRouter
        initialEntries={
          [
            { pathname: '/projects/1' },
          ]
        }
        initialIndex={0}
      >
        <Routes>
          <Route
            path="/projects/:id"
            element={<IndividualProjectPage />}
          >
          </Route>
        </Routes>
      </MemoryRouter>
    </Main>
  </ThemeProvider>
);

export const InvalidIndividualProjectPage = () => (
  <ThemeProvider
    theme={darkTheme()}
  >
    <Main>
      <MemoryRouter
        initialEntries={
          [
            { pathname: '/projects/1123123' },
          ]
        }
        initialIndex={0}
      >
        <Routes>
          <Route
            path="/projects/:id"
            element={<IndividualProjectPage />}
          >
          </Route>
        </Routes>
      </MemoryRouter>
    </Main>
  </ThemeProvider>
);
