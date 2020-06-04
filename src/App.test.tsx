import React from 'react';
import { render} from '@testing-library/react';

import Dashboard from './pages/Dashboard';

test('renders learn react link', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/home/i);
  
  expect(linkElement).toBeInTheDocument();
});
