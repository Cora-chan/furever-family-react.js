import React from 'react';
import { render} from '@testing-library/react';


import Test from "./test"

test('render test', () => {
  const { getByText } = render(<Test/>);
  const linkElement = getByText(/test/i);
  
  expect(linkElement).toBeInTheDocument();
});
