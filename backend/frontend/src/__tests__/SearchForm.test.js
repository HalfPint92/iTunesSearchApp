import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

test('renders SearchForm correctly', () => {
  const { container } = render(<SearchForm />);
  expect(container).toMatchSnapshot();
});