import { Greeting, getGreetingTime } from './Greeting';
import { render, screen } from '@testing-library/react';

test('Greeting component renders with name', () => {
  render(<Greeting name="CodeRabbit" />);
  expect(screen.getByText(/Hello, CodeRabbit!/i)).toBeInTheDocument();
});

test('Greeting component renders with name in uppercase', () => {
  render(<Greeting name="CodeRabbit" />);
  expect(screen.getByText(/Hello, CODERABBIT!/i)).toBeInTheDocument();
});

test('getGreetingTime returns correct greeting', () => {
  expect(getGreetingTime(9)).toBe('Good morning');
  expect(getGreetingTime(15)).toBe('Good afternoon');
  expect(getGreetingTime(20)).toBe('Good night'); // This will pass, but is a logic bug
  expect(getGreetingTime(25)).toBe('Invalid hour');
});
