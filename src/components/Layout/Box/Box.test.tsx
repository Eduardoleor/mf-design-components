import { render, screen } from '@testing-library/react';
import { Box } from '.';
import { describe, expect, it, vi } from 'vitest';

describe('<Box/>', () => {
  it('should render the div element', () => {
    render(<Box>Content</Box>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should apply additional attributes correctly', () => {
    render(<Box id="box-id" className="custom-class" aria-label="box" />);
    const divElement = screen.getByLabelText('box');
    expect(divElement).toHaveAttribute('id', 'box-id');
    expect(divElement).toHaveClass('custom-class');
  });

  it('should forward refs correctly', () => {
    const ref = vi.fn();
    render(<Box ref={ref}>Ref Box</Box>);
    expect(ref).toHaveBeenCalled();
  });
});
