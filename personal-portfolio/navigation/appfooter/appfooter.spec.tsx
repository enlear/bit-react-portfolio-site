import React from 'react';
import { render } from '@testing-library/react';
import { BasicAppfooter } from './appfooter.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAppfooter />);
  const rendered = getByText('© 2022 Ober. All Rights Reserved.');
  expect(rendered).toBeTruthy();
});
