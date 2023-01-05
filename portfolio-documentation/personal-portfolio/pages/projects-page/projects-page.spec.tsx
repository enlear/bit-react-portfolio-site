import React from 'react';
import { render } from '@testing-library/react';
import { LightProjectsPage } from './projects-page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightProjectsPage />);
  const rendered = getByText('projects.');
  expect(rendered).toBeTruthy();
});
