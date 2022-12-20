import React from 'react';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { WorkItem } from './work-item';

export const LightWorkItem = () => (
  <ThemeProvider
    theme={lightTheme()}
  >
    <WorkItem
      company="Company"
      designation="Designation"
      period="Period"
      size={5}
    />
  </ThemeProvider>
);

export const DarkWorkItem = () => (
  <ThemeProvider
    theme={darkTheme()}
  >
    <WorkItem
      company="Company"
      designation="Designation"
      period="Period"
      size={7}
    />
  </ThemeProvider>
);
