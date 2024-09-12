import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '.';
import { describe, expect, it, vi } from 'vitest';

describe('<Button/>', () => {
  it('should render the button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should apply the correct styles based on variant prop', () => {
    const { container } = render(<Button variant="solid">Solid Button</Button>);
    expect(container.querySelector('button')).toHaveClass('bg-primary-500');
    expect(container.querySelector('button')).toHaveClass('hover:bg-primary-600');

    const { container: outlineContainer } = render(<Button variant="outline">Outline Button</Button>);
    expect(outlineContainer.querySelector('button')).toHaveClass('border-2');
    expect(outlineContainer.querySelector('button')).toHaveClass('text-primary-600');
    expect(outlineContainer.querySelector('button')).toHaveClass('border-primary-500');
    expect(outlineContainer.querySelector('button')).toHaveClass('hover:bg-primary-100');

    const { container: ghostContainer } = render(<Button variant="ghost">Ghost Button</Button>);
    expect(ghostContainer.querySelector('button')).toHaveClass('transition-colors');
    expect(ghostContainer.querySelector('button')).toHaveClass('text-primary-600');
    expect(ghostContainer.querySelector('button')).toHaveClass('hover:bg-primary-100');
  });

  it('should apply the correct styles based on size prop', () => {
    const { container } = render(<Button size="sm">Small Button</Button>);
    expect(container.querySelector('button')).toHaveClass('px-4');
    expect(container.querySelector('button')).toHaveClass('py-2');
    expect(container.querySelector('button')).toHaveClass('text-sm');

    const { container: mdContainer } = render(<Button size="md">Medium Button</Button>);
    expect(mdContainer.querySelector('button')).toHaveClass('px-4');
    expect(mdContainer.querySelector('button')).toHaveClass('py-2');
    expect(mdContainer.querySelector('button')).toHaveClass('text-base');

    const { container: lgContainer } = render(<Button size="lg">Large Button</Button>);
    expect(lgContainer.querySelector('button')).toHaveClass('px-6');
    expect(lgContainer.querySelector('button')).toHaveClass('py-3');
    expect(lgContainer.querySelector('button')).toHaveClass('text-lg');
  });

  it('should apply the correct styles based on colorscheme prop', () => {
    const { container } = render(<Button colorscheme="primary">Primary Button</Button>);
    expect(container.querySelector('button')).toHaveClass('text-white');
  });

  it('should combine custom className with other styles', () => {
    const { container } = render(<Button className="custom-class">Custom Button</Button>);
    expect(container.querySelector('button')).toHaveClass('custom-class');
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    fireEvent.click(screen.getByText('Clickable Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should forward refs correctly', () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Button with Ref</Button>);
    expect(ref).toHaveBeenCalled();
  });

  it('should render with other button attributes', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByText('Disabled Button')).toBeDisabled();
  });
});
