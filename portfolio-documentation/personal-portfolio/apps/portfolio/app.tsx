import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { SettingsProvider, SettingsConsumer } from '@showoff/personal-portfolio.contexts.settings-context';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { AboutPage } from '@showoff/personal-portfolio.pages.about-page';
import { IndividualProjectPage } from '@showoff/personal-portfolio.pages.individual-project-page';
import { LandingPage } from '@showoff/personal-portfolio.pages.landing-page';
import { ProjectsPage } from '@showoff/personal-portfolio.pages.projects-page';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { ContactPage } from '@showoff/contact-me.pages.contact-page';

const dark = darkTheme();
const light = lightTheme();

export function PortfolioApp() {
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
      </SettingsProvider >
    </>
  );
}
