import React from 'react';
import { render } from '@testing-library/react';
import { DarkContactPage } from './contact-page.composition';

it('should render with the correct breadcrumb', () => {
  const { getByText } = render(<DarkContactPage />);
  const rendered = getByText('Contact.');
  expect(rendered).toBeTruthy();
});
