import React from 'react';
import { render } from '@testing-library/react';
import { SampleLandingPage } from './landing-page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleLandingPage />);
  const rendered = getByText('CREATIVE DEVELOPER WEB DESIGNER');
  expect(rendered).toBeTruthy();
});
