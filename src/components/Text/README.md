# Text Component

The `Text` component is part of the `mf-design-components` library. It provides a simple way to render paragraph text with customizable class names and properties.

## Installation

To use the `Text` component, first install the `mf-design-components` package if you haven't already:

```bash
npm install mf-design-components
```

## Usage

To use the `Text` component in your React project, import it from `mf-design-components` and use it as follows:

```jsx
import { Text } from 'mf-design-components';

const App = () => {
  return (
    <div>
      <Text>This is a default text.</Text>
      <Text className="text-lg font-bold text-blue-500">Custom Styled Text</Text>
      <Text className="text-sm text-gray-700">
        This is a text component with additional content. <span className="italic">Italic text</span>
      </Text>
    </div>
  );
};

export default App;
```

## Props

The `Text` component accepts the following props:

- `className`: Additional class names to apply to the `<p>` element.
- `children`: The content to display inside the paragraph element. This can include text and other inline elements.

## Storybook Stories

The `Text` component is documented in Storybook with the following stories:

- **Default**: A basic text component with default styling.
- **Custom Styled**: A text component with custom styling applied.
- **With Additional Content**: A text component that includes additional inline content, such as italicized text.

### Storybook Usage

To view and test the `Text` component in Storybook, run:

```bash
npm run storybook
```

This will start the Storybook development server and open the Storybook UI in your browser.

## Development

To contribute to the development of the `Text` component:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev` to see changes live.

## License

This project is licensed under the MIT License.

Feel free to adjust any details as needed!
