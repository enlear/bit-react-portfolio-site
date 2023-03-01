import React from 'react';
import { render } from '@testing-library/react';
import { SampleHistory } from './history.composition';

it('should render with the correct text', () => {
  const { getAllByText } = render(<SampleHistory />);
  const rendered = getAllByText('UX Engineer');
  expect(rendered.length).toBeGreaterThan(0);
});
