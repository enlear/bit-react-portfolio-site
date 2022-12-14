import React, { ReactNode } from 'react';
import { Appbar } from '@showoff/personal-portfolio.navigation.appbar';
import { Appfooter } from '@showoff/personal-portfolio.navigation.appfooter';
import { Box, Container, styled } from '@mui/material';

export type MainProps = {
  /**
   * the content to be rendered inside the layout.
   */
  children?: ReactNode;
};

/**
 * In MUI it is recommend to use a styled component instead of a class component when dealing with
 * large styling. The `MainRoot` component contains the styling needed for the main layout.
 */
const MainRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 68,
}));

export function Main({ children }: MainProps) {
  return (
    <MainRoot>
      <Appbar />
      <Container
        maxWidth="lg"
        sx={{ paddingTop: '68px', height: '100%' }}
      >
        <main
          style={{
            flexGrow: 1,
          }}
        >
          {children}
        </main>
      </Container>
      <div style={{ marginTop: 'auto' }}>
        <Container
          maxWidth="lg"
        >
          <Box sx={{ pt: 10 }}>
            <Appfooter />
          </Box>
        </Container>
      </div>
    </MainRoot>
  );
}
