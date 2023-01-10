import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { SettingsProvider, SettingsConsumer } from '@showoff/personal-portfolio.contexts.settings-context';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { AboutPage } from '@showoff/personal-portfolio.pages.about-page';
import { IndividualProjectPage } from '@showoff/personal-portfolio.pages.individual-project-page';
import { LandingPage } from '@showoff/personal-portfolio.pages.landing-page';
import { ProjectsPage } from '@showoff/personal-portfolio.pages.projects-page';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { ContactPage } from '@showoff/contact-me.pages.contact-page';
import { darkPortfolioTheme } from '@showoff/personal-portfolio.theme.dark-portfolio-theme';
import { lightPortfolioTheme } from '@showoff/personal-portfolio.theme.light-portfolio-theme';

export function PortfolioApp() {

  const dark = useMemo(() => darkPortfolioTheme({ palette: { primary: { main: '#CBF382' } } }), []);
  const light = useMemo(() => lightPortfolioTheme(), []);

  return (
    <>
      <Helmet>
        <title>My Portfolio</title>
      </Helmet>
      <SettingsProvider>
        <SettingsConsumer>
          {({ theme }) => (
            <ThemeProvider
              theme={theme === 'dark' ? dark : light}
            >
              <Main>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:id" element={<IndividualProjectPage />} />
                </Routes>
              </Main>
            </ThemeProvider>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </>
  );
}
