import { render, screen } from '@testing-library/react';
import { Input } from '.';
import { describe, expect, it, vi } from 'vitest';

describe('<Input/>', () => {
  it('should render the input element', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('should apply default styles', () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveClass('w-full');
    expect(inputElement).toHaveClass('border');
    expect(inputElement).toHaveClass('border-gray-200');
    expect(inputElement).toHaveClass('p-2');
    expect(inputElement).toHaveClass('rounded-lg');
    expect(inputElement).toHaveClass('transition-all');
    expect(inputElement).toHaveClass('duration-100');
    expect(inputElement).toHaveClass('outline-none');
    expect(inputElement).toHaveClass('focus:outline-primary-500');
    expect(inputElement).toHaveClass('focus:border-transparent');
    expect(inputElement).toHaveClass('placeholder:text-gray-400');
    expect(inputElement).toHaveClass('placeholder:text-sm');
  });

  it('should apply additional class names', () => {
    const { container } = render(<Input className="custom-class" placeholder="Custom class" />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveClass('custom-class');
  });

  it('should apply other attributes correctly', () => {
    render(<Input placeholder="Test placeholder" disabled />);
    const inputElement = screen.getByPlaceholderText('Test placeholder');
    expect(inputElement).toBeDisabled();
  });

  it('should forward refs correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} placeholder="Ref input" />);
    expect(ref).toHaveBeenCalled();
  });
});
