# Box Component

The `Box` component is part of the `mf-design-components` library. It provides a flexible container element that can be styled with class names and other props.

## Installation

To use the `Box` component, first install the `mf-design-components` package if you haven't already:

```bash
npm install mf-design-components
```

## Usage

To use the `Box` component in your React project, import it from `mf-design-components` and use it as follows:

```jsx
import { Box } from 'mf-design-components';

const App = () => {
  return (
    <div>
      <Box className="w-[200px] h-[200px] bg-gray-300">Default Box</Box>
      <Box className="w-[150px] h-[150px] border-2 border-dashed border-blue-500">Custom Styled Box</Box>
      <Box className="w-[300px] h-[300px] p-4 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="text-white">Extra Content Inside</div>
      </Box>
    </div>
  );
};

export default App;
```

## Props

The `Box` component accepts the following props:

- `className`: Additional class names to apply to the `<div>` element.
- `children`: The content to display inside the `<div>` element. This can include text, other components, or additional elements.
- `...props`: Any other valid `<div>` props can be passed through.

## Storybook Stories

The `Box` component is documented in Storybook with the following stories:

- **Default**: A box with default styling.
- **With Custom Styles**: A box with custom border styles.
- **With Extra Content**: A box with additional content and gradient background.

### Storybook Usage

To view and test the `Box` component in Storybook, run:

```bash
npm run storybook
```

This will start the Storybook development server and open the Storybook UI in your browser.

## Development

To contribute to the development of the `Box` component:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev` to see changes live.

## License

This project is licensed under the MIT License.

This `README.md` provides an overview of how to use the `Box` component, including installation, usage, and details on its Storybook stories. Adjust as needed for your specific project requirements!
