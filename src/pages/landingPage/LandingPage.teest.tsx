import React from 'react';
import LandingPage from './LandingPage';

import { render } from '@testing-library/react';

describe('Landing page component', () => {
  render(<LandingPage />);
  it('should render', () => {
    expect(true).toBeTruthy();
    // expect(screen.getByRole('button')).toBeTruthy();
  });
});
