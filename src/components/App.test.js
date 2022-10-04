import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App login component', () => {
  render(<App />);
  const linkElement = screen.getByText(/dark sky observer app/i);
  expect(linkElement).toBeInTheDocument();
});
