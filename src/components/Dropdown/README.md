# Dropdown Component

The `Dropdown` component is a customizable dropdown with the following features:

- **Props**:

  - `options`: Array of options to be displayed in the dropdown, each with a value, label, and optional icon.
  - `placeholder`: Text to be shown when no option is selected.
  - `label`: Label for the dropdown.
  - `onSelect`: Callback function triggered when an option is selected.
  - `showIcon`: Boolean to determine if icons should be displayed.
  - `isSortable`: Boolean to determine if options should be sorted alphabetically.
  - `searchable`: Boolean to enable searching within the dropdown options.

- **State**:

  - `isOpen`: Controls if the dropdown menu is open.
  - `selectedOption`: Holds the currently selected option's value.
  - `isFocused`: Tracks if the dropdown is focused.
  - `focusedIndex`: Tracks the currently focused option in the dropdown list.
  - `searchQuery`: Stores the current search query for filtering options.
  - `placeholderText`: Stores the text to be shown as the placeholder.

- **Effects**:

  - Manages placeholder text truncation.
  - Handles clicks outside the dropdown to close it.
  - Updates the `ref` if provided.

- **Event Handlers**:
  - `handleSelect`: Selects an option and closes the dropdown.
  - `handleBlur`, `handleOpenList`, `handleFocus`, `handleMouseEnter`, `handleMouseLeave`: Manage dropdown interactions and state updates.

### Storybook Stories

The Storybook configuration includes various scenarios to test different aspects of the `Dropdown` component:

- **Default**: Shows a basic dropdown with icons and sorting enabled.
- **CustomIconsList**: Displays a dropdown with different icons for each option.
- **NoIconsList**: Shows a dropdown without icons.
- **ItemsScroll**: Demonstrates the dropdown with a scrollable list of items.
- **NoLabel**: Renders the dropdown without a label.
- **PlaceholderEmpty**: Shows the dropdown with an empty placeholder.
- **NoLabelNoPlaceholder**: Displays the dropdown without both label and placeholder.
- **SortedItems**: Shows a sorted list of items.
- **SortedItemsNoIcon**: Shows a sorted list of items without icons.
- **UnsortedItems**: Displays the dropdown with unsorted items.
- **Searchable**: Demonstrates the dropdown with a searchable input field.

### Suggestions for Improvement

1. **Accessibility**: Ensure that the dropdown is accessible, especially for keyboard navigation and screen readers.
2. **Styling Consistency**: Verify that the styles (e.g., `dropdownContainer`, `dropdownListContainer`, etc.) are consistently applied and responsive.
3. **Performance**: Consider optimizing the component if there are performance concerns with a large number of options.

### Installation

To use the `Dropdown` component, you need to install the `mf-design-components` library. You can do this using npm or yarn:

```bash
npm install mf-design-components
```

or

```bash
yarn add mf-design-components
```

### Example Usage

Here is an example of how to use the `Dropdown` component from the `mf-design-components` library:

```jsx
import React from 'react';
import { Dropdown } from 'mf-design-components';
import { UserIcon, BookmarkSlashIcon, ComputerDesktopIcon, DocumentCurrencyEuroIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

const Example = () => {
  const handleSelect = (value: string) => {
    console.log(`Selected value: ${value}`);
  };

  return (
    <Dropdown
      options={[
        { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
        { value: '2', label: 'Maria Gonzalez', icon: <BookmarkSlashIcon className="w-4 h-4 text-gray-500" /> },
        { value: '3', label: 'Carlos Martinez', icon: <ComputerDesktopIcon className="w-4 h-4 text-gray-500" /> },
        { value: '4', label: 'Ana Lopez', icon: <DocumentCurrencyEuroIcon className="w-4 h-4 text-gray-500" /> },
        { value: '5', label: 'Luis Hernandez', icon: <ExclamationTriangleIcon className="w-4 h-4 text-gray-500" /> },
      ]}
      placeholder="Select a person"
      label="Choose a person"
      isSortable={true}
      showIcon={true}
      searchable={true}
      onSelect={handleSelect}
    />
  );
};

export default Example;
```

This example demonstrates how to use the `Dropdown` component with various props, including handling option selection and rendering custom icons. Adjust the `options`, `placeholder`, `label`, and other props according to your needs.
