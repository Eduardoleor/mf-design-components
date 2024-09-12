# Button Component

The `Button` component is part of the `mf-design-components` library. It provides a flexible and customizable button element that supports different variants and sizes.

## Installation

To use the `Button` component, first install the `mf-design-components` package:

```bash
npm install mf-design-components
```

## Usage

To use the `Button` component in your React project, import it from `mf-design-components` and use it as follows:

```jsx
import { Button } from 'mf-design-components';

const App = () => {
  return (
    <div>
      <Button variant="solid" size="medium" colorscheme="blue">
        Solid Button
      </Button>
      <Button variant="outline" size="large" colorscheme="green">
        Outline Button
      </Button>
      <Button variant="ghost" size="small" colorscheme="red">
        Ghost Button
      </Button>
    </div>
  );
};

export default App;
```

## Props

The `Button` component accepts the following props:

- `variant`: Specifies the button variant. Options include `"solid"`, `"outline"`, and `"ghost"`.
- `size`: Determines the size of the button. Can be `"small"`, `"medium"`, or `"large"`.
- `colorscheme`: Defines the color scheme of the button. Example values could be `"blue"`, `"green"`, or `"red"`.
- `className`: Additional class names to apply to the button.
- `children`: The content to display inside the button. This is typically text or icons.

## Storybook Stories

The Button component is documented in Storybook with the following stories:

- **Solid**: A button with the "solid" variant.
- **Outline**: A button with the "outline" variant.
- **Ghost**: A button with the "ghost" variant.

### Storybook Usage

To view and test the `Button` component in Storybook, run:

```bash
npm run storybook
```

This will start the Storybook development server and open the Storybook UI in your browser.

## Development

To contribute to the development of the `Button` component:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev` to see changes live.

## License

This project is licensed under the MIT License.

Feel free to make any additional changes or adjustments as needed!
