import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { USER_PROFILE, SOCIAL_LINKS } from '@showoff/personal-portfolio.constants.data';
import { LandingPage } from './landing-page';

export const SampleLandingPage = () => (
  <MemoryRouter>
    <LandingPage
      profile={USER_PROFILE}
      socialLinks={SOCIAL_LINKS.links}
    />
  </MemoryRouter>
);
