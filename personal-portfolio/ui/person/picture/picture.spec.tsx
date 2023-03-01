import React from 'react';
import { render } from '@testing-library/react';
import { SamplePicture } from './picture.composition';

it('should render an img tag', () => {
  const rendered = render(<SamplePicture />);
  expect(rendered.getByRole('img')).toBeTruthy();
});
