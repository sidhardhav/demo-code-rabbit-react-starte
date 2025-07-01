import React from 'react';

export function Greeting({ name }: { name: string }) {
  // Introduce a bug: if name is empty, it should say 'Guest', but this is not handled
  return <h2>Hello, {name.toUpperCase()}! Welcome to CodeRabbit review test.</h2>;
}

// Add a new function with a logic bug
export function getGreetingTime(hour: number): string {
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  if (hour < 24) return 'Good night'; // Bug: should be 'Good evening' for 18-21, 'Good night' for 22-23
  return 'Invalid hour';
}
