import React from 'react';
import LandingPage from './LandingPage';

import { render, screen } from '@testing-library/react';

describe('Landing page component', () => {
  render(<LandingPage />);
  it('should render', () => {
    expect(screen.getByText('submit')).toBeTruthy();
  });
});
