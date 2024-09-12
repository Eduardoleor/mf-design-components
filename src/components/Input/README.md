# Input Component

The `Input` component is part of the `mf-design-components` library. It provides a customizable text input field with support for various input types.

## Installation

To use the `Input` component, first install the `mf-design-components` package if you haven't already:

```bash
npm install mf-design-components
```

## Usage

To use the `Input` component in your React project, import it from `mf-design-components` and use it as follows:

```jsx
import { Input } from 'mf-design-components';

const App = () => {
  return (
    <div>
      <Input type="text" placeholder="Insert text here" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="date" placeholder="Date" />
    </div>
  );
};

export default App;
```

## Props

The `Input` component accepts the following props:

- `type`: Specifies the type of input. Options include `"text"`, `"password"`, `"number"`, `"date"`, etc.
- `placeholder`: Placeholder text for the input field.
- `className`: Additional class names to apply to the input element.
- `children`: Not applicable for this component but included for consistency with other components.
- `...props`: Any other valid input props can be passed through.

## Storybook Stories

The `Input` component is documented in Storybook with the following stories:

- **Text**: A text input field with a placeholder of "Insert text here".
- **Password**: A password input field with a placeholder of "Password".
- **Number**: A number input field with a placeholder of "Number".
- **Date**: A date input field with a placeholder of "Date".

### Storybook Usage

To view and test the `Input` component in Storybook, run:

```bash
npm run storybook
```

This will start the Storybook development server and open the Storybook UI in your browser.

## Development

To contribute to the development of the `Input` component:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev` to see changes live.

## License

This project is licensed under the MIT License.

Feel free to tweak any sections according to your project's specifics!
