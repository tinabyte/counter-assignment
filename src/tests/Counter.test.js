// Import necessary React Testing Library helpers
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component
import Counter from '../components/Counter'; // Adjust the import path as necessary

// Use beforeEach to render the Counter component before each test
beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Check if the Counter component's title is rendered
  const counterTitle = screen.getByText(/counter/i);
  expect(counterTitle).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Use data-testid to find the element that displays the count
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Find the increment button and click it
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);
  // Check if the count has incremented
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // To decrement, we need to increment first to avoid negative count for this test scenario
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton); // Increment to 1
  
  // Now find the decrement button and click it to go back to 0
  const decrementButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrementButton);
  // Check if the count has decremented
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});
