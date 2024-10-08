import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '.';

const meta: Meta<typeof LoginForm> = {
  title: 'Examples/Form',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {};
