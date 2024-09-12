# Stack Component

The `Stack` component is part of the `mf-design-components` library. It provides a flexible container that arranges its children in a vertical stack with customizable spacing and styling.

## Installation

To use the `Stack` component, first install the `mf-design-components` package if you haven't already:

```bash
npm install mf-design-components
```

## Usage

To use the `Stack` component in your React project, import it from `mf-design-components` and use it as follows:

```jsx
import { Stack } from 'mf-design-components';
import { Box } from 'mf-design-components';

const App = () => {
  return (
    <Stack className="gap-4 p-4 bg-gray-300">
      <Box className="w-[100px] h-[100px] bg-blue-500" />
      <Box className="w-[100px] h-[100px] bg-red-500" />
      <Box className="w-[100px] h-[100px] bg-green-500" />
    </Stack>
  );
};

export default App;
```

## Props

The `Stack` component accepts the following props:

- `className`: Additional class names to apply to the `Stack` component. By default, it applies vertical flexbox layout with alignment to start.
- `children`: The content to display inside the `Stack` component. This is typically a collection of child elements or components.
- `...props`: Any other valid `Box` props can be passed through to the underlying `Box` component.

## Storybook Stories

The `Stack` component is documented in Storybook with the following story:

- **Default**: A vertical stack with a gap between items and a background color. It includes multiple `Box` components arranged in a vertical column.

### Storybook Usage

To view and test the `Stack` component in Storybook, run:

```bash
npm run storybook
```

This will start the Storybook development server and open the Storybook UI in your browser.

## Development

To contribute to the development of the `Stack` component:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev` to see changes live.

## License

This project is licensed under the MIT License.

Feel free to adjust any details based on your project's specifics!
