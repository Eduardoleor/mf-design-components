import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Dropdown } from '.';
import { describe, expect, it, vi } from 'vitest';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('Dropdown', () => {
  it('selects an option and closes the dropdown', async () => {
    const handleSelect = vi.fn();
    render(<Dropdown options={options} onSelect={handleSelect} />);

    const input = screen.getByPlaceholderText('Select an option');
    fireEvent.click(input);

    const option = screen.getByText('Option 1');
    fireEvent.click(option);

    expect(handleSelect).toHaveBeenCalledWith('1');

    await waitFor(() => {
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });
  });

  it('renders the dropdown with a label and placeholder', () => {
    render(<Dropdown options={options} label="Choose an option" placeholder="Select an option" />);

    expect(screen.getByText('Choose an option')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Select an option')).toBeInTheDocument();
  });

  it('opens the dropdown when clicked and displays all options', () => {
    render(<Dropdown options={options} />);

    const input = screen.getByPlaceholderText('Select an option');
    fireEvent.click(input);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('displays "No items found" when search returns no results', () => {
    render(<Dropdown options={[]} searchable />);

    const input = screen.getByPlaceholderText('Select an option');
    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'Nonexistent' } });

    expect(screen.getByText('No items found')).toBeInTheDocument();
  });
});
