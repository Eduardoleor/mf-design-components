import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '.';
import { UserIcon, BookmarkSlashIcon, ComputerDesktopIcon, DocumentCurrencyEuroIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '2', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '3', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '4', label: 'Ana Lopez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '5', label: 'Luis Hernandez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
    ],
    placeholder: 'Select a person',
    label: 'Choose a person',
    isSortable: true,
    showIcon: true,
  },
};

export const CustomIconsList: Story = {
  args: {
    options: [
      { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '2', label: 'Maria Gonzalez', icon: <BookmarkSlashIcon className="w-4 h-4 text-gray-500" /> },
      { value: '3', label: 'Carlos Martinez', icon: <ComputerDesktopIcon className="w-4 h-4 text-gray-500" /> },
      { value: '4', label: 'Ana Lopez', icon: <DocumentCurrencyEuroIcon className="w-4 h-4 text-gray-500" /> },
      { value: '5', label: 'Luis Hernandez', icon: <ExclamationTriangleIcon className="w-4 h-4 text-gray-500" /> },
    ],
    placeholder: 'Select a person',
    label: 'Choose a person',
    isSortable: true,
    showIcon: true,
  },
};

export const NoIconsList: Story = {
  args: {
    options: [
      { value: '1', label: 'Juan Perez' },
      { value: '2', label: 'Maria Gonzalez' },
      { value: '3', label: 'Carlos Martinez' },
      { value: '4', label: 'Ana Lopez' },
      { value: '5', label: 'Luis Hernandez' },
    ],
    placeholder: 'Select a person',
    label: 'Choose a person',
    isSortable: true,
    showIcon: false,
  },
};

export const ItemsScroll: Story = {
  args: {
    options: [
      { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '2', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '3', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '4', label: 'Ana Lopez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '5', label: 'Luis Hernandez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '6', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '7', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '8', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '9', label: 'Ana Lopez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '10', label: 'Luis Hernandez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '11', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
    ],
    placeholder: 'Select a person',
    label: 'Choose a person',
    isSortable: true,
    showIcon: true,
  },
};

export const NoLabel: Story = {
  args: {
    options: [
      { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '2', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '3', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '4', label: 'Ana Lopez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '5', label: 'Luis Hernandez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
    ],
    placeholder: 'Select a person',
    showIcon: true,
    isSortable: true,
  },
};

export const PlaceholderEmpty: Story = {
  args: {
    options: [
      { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '2', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '3', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '4', label: 'Ana Lopez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '5', label: 'Luis Hernandez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
    ],
    label: 'Choose a person',
    placeholder: '',
    showIcon: true,
    isSortable: true,
  },
};

export const NoLabelNoPlaceholder: Story = {
  args: {
    options: [
      { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '2', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '3', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '4', label: 'Ana Lopez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '5', label: 'Luis Hernandez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
    ],
    showIcon: true,
    placeholder: '',
    label: '',
    isSortable: true,
  },
};

export const SortedItems: Story = {
  args: {
    options: [
      { value: '2', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '3', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
    ],
    placeholder: 'Select a person',
    label: 'Choose a person',
    isSortable: true,
    showIcon: true,
  },
};

export const SortedItemsNoIcon: Story = {
  args: {
    options: [
      { value: '2', label: 'Maria Gonzalez' },
      { value: '1', label: 'Juan Perez' },
      { value: '3', label: 'Carlos Martinez' },
    ],
    placeholder: 'Select a person',
    label: 'Choose a person',
    isSortable: true,
  },
};

export const UnsortedItems: Story = {
  args: {
    options: [
      { value: '5', label: 'Luis Hernandez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '3', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '2', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '4', label: 'Ana Lopez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
    ],
    placeholder: 'Select a person',
    label: 'Choose a person',
    isSortable: false,
    showIcon: true,
  },
};

export const Searchable: Story = {
  args: {
    options: [
      { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '2', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '3', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '4', label: 'Ana Lopez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
      { value: '5', label: 'Luis Hernandez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
    ],
    placeholder: 'Search',
    label: 'Choose a person',
    isSortable: true,
    showIcon: true,
    searchable: true,
  },
};
