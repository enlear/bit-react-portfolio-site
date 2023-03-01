import React from 'react';
import { render } from '@testing-library/react';
import { SampleAboutPage } from './about-page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleAboutPage />);
  const rendered = getByText('About-me.');
  expect(rendered).toBeTruthy();
});
