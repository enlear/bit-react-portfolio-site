import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from './link';

export const BasicLink = () => {
  return (
    <MemoryRouter>
      <Link
        to={'/'}
      >hello world!
      </Link>
    </MemoryRouter>
  );
}
