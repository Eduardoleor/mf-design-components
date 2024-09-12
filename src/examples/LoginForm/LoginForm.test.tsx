import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LoginForm } from '.'; // Adjust the path as needed

describe('LoginForm', () => {
  it('renders the login form correctly', () => {
    render(<LoginForm />);

    expect(screen.getByText('Welcome! Please enter your credentials')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Select a person')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('handles the login button click', () => {
    render(<LoginForm />);

    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeEnabled();
  });
});
