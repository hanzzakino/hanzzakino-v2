import { render, screen } from '@testing-library/react';
import MainView from './MainView';

test('renders learn react link', () => {
  render(<MainView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
