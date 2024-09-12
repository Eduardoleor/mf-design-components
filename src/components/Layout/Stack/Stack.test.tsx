import { render, screen } from '@testing-library/react';
import { Stack } from '.';
import { describe, expect, it } from 'vitest';

describe('<Stack/>', () => {
  it('should render the Stack component', () => {
    render(<Stack>Content</Stack>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should apply default styles and merge additional classNames', () => {
    const { container } = render(<Stack className="custom-class">Styled Content</Stack>);
    const divElement = container.querySelector('div');
    expect(divElement).toHaveClass('flex');
    expect(divElement).toHaveClass('flex-col');
    expect(divElement).toHaveClass('items-start');
    expect(divElement).toHaveClass('custom-class');
  });

  it('should apply other attributes correctly', () => {
    render(<Stack id="stack-id" aria-label="stack" />);
    const divElement = screen.getByLabelText('stack');
    expect(divElement).toHaveAttribute('id', 'stack-id');
  });
});
