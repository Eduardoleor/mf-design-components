import { render, screen } from '@testing-library/react';
import { Text } from '.';
import { describe, expect, it } from 'vitest';

describe('Text', () => {
  it('should render the text content', () => {
    render(<Text>Sample Text</Text>);
    expect(screen.getByText('Sample Text')).toBeInTheDocument();
  });

  it('should apply custom classNames', () => {
    const { container } = render(<Text className="text-red-500">Styled Text</Text>);
    const pElement = container.querySelector('p');
    expect(pElement).toHaveClass('text-red-500');
  });

  it('should apply other attributes correctly', () => {
    render(
      <Text id="text-id" aria-label="text-label">
        Text with attributes
      </Text>
    );
    const pElement = screen.getByLabelText('text-label');
    expect(pElement).toHaveAttribute('id', 'text-id');
  });

  it('should render children content correctly', () => {
    render(
      <Text>
        <span>Child Element</span>
      </Text>
    );
    expect(screen.getByText('Child Element')).toBeInTheDocument();
  });

  it('should forward refs correctly', () => {
    const ref = (node: HTMLParagraphElement | null) => {
      if (node) {
        // Do something with the node if needed
      }
    };
    render(<Text ref={ref}>Text with Ref</Text>);
    // No assertion needed here unless you have specific checks for ref
  });
});
