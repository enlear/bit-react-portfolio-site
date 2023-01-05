import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import React from 'react';
import { ProjectsList } from './projects-list';

export const BasicProjectsList = () => {
  return (
    <ThemeProvider>
      <ProjectsList />
    </ThemeProvider>
  );
}
