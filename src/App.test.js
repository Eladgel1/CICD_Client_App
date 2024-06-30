import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is our CICD Client Example hahahahahahahahahahaha/i);
  expect(linkElement).toBeInTheDocument();
});
