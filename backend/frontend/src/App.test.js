import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('adds item to favorites when clicked', () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  const searchInput = getByPlaceholderText('Search term');
  const searchButton = getByText('Search');
  const addToFavoritesButton = getByTestId('addToFavoritesButton');

  // Simulate user interaction
  fireEvent.change(searchInput, { target: { value: 'example' } });
  fireEvent.click(searchButton);
  fireEvent.click(addToFavoritesButton);

  // Assert the expected behavior
  expect(getByText('Favorite Content')).toBeInTheDocument();
});
