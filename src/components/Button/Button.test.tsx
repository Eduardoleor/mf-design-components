import { render } from '@testing-library/react';
import { Button } from '.';
import { describe, expect, it } from 'vitest';

describe('Button', () => {
  it('should render the button', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });
});
