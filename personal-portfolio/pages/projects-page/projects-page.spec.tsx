import React from 'react';
import { render } from '@testing-library/react';
import { SampleProjectsPage } from './projects-page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleProjectsPage />);
  const rendered = getByText('projects.');
  expect(rendered).toBeTruthy();
});
