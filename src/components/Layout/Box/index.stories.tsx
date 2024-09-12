import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '.';
import { cn } from '@/utils';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Box className={cn('w-[200px] h-[200px] bg-gray-300', args.className)} {...args}>
      Default Box
    </Box>
  ),
};

export const WithCustomStyles: Story = {
  render: (args) => (
    <Box className={cn('w-[150px] h-[150px] border-2 border-dashed border-blue-500', args.className)} {...args}>
      Custom Styled Box
    </Box>
  ),
};

export const WithExtraContent: Story = {
  render: (args) => (
    <Box className={cn('w-[300px] h-[300px] p-4 bg-gradient-to-r from-blue-500 to-green-500', args.className)} {...args}>
      <div className="text-white">Extra Content Inside</div>
    </Box>
  ),
};
