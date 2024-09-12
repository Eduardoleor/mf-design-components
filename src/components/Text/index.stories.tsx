import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Text {...args}>Default Text</Text>,
};

export const CustomStyled: Story = {
  render: (args) => (
    <Text className="text-lg font-bold text-blue-500" {...args}>
      Custom Styled Text
    </Text>
  ),
};

export const WithAdditionalContent: Story = {
  render: (args) => (
    <Text className="text-sm text-gray-700" {...args}>
      This is a text component with additional content. <span className="italic">Italic text</span>
    </Text>
  ),
};
