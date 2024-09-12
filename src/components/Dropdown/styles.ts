import { cva } from 'class-variance-authority';

// Dropdown container styles
export const dropdownContainer = cva('relative border cursor-pointer rounded-lg h-[58px]', {
  variants: {
    isOpen: {
      true: 'border-[#164E63]',
      false: 'border-gray-300',
    },
    label: {
      true: 'rounded-lg',
      false: 'rounded-lg',
    },
    isFocused: {
      true: 'shadow-md',
      false: '',
    },
  },
  defaultVariants: {
    isOpen: false,
    label: false,
    isFocused: false,
  },
});

// Dropdown list container styles
export const dropdownListContainer = cva('absolute z-10 w-full mt-3 -ml-0 bg-white rounded-b-lg shadow-lg', {
  variants: {
    isOpen: {
      true: 'max-h-48 overflow-y-auto',
      false: '',
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

// Input styles
export const inputStyles = cva('w-full border-none bg-transparent focus:outline-none h-full flex items-center px-3 text-gray-600 text-sm', {
  variants: {
    label: {
      true: 'pt-0',
      false: '',
    },
  },
  defaultVariants: {
    label: false,
  },
});

// Label styles
export const labelStyles = cva('block text-xs font-medium mt-2 ml-3 text-gray-500', {
  variants: {
    hasLabel: {
      true: 'bg-white px-1',
      false: '',
    },
  },
  defaultVariants: {
    hasLabel: true,
  },
});

// Placeholder styles
export const placeholderStyles = cva('absolute left-3 text-xs font-medium px-2 bg-white text-gray-500', {
  variants: {
    hasPlaceholder: {
      true: '-top-2',
      false: 'top-auto',
    },
  },
  defaultVariants: {
    hasPlaceholder: true,
  },
});

// Option styles
export const optionStyles = cva('p-2 cursor-pointer text-xs flex items-center', {
  variants: {
    isSelected: {
      true: 'font-bold text-black',
      false: '',
    },
    isFocused: {
      true: 'font-semibold text-black hover:bg-gray-100',
      false: 'text-gray-600',
    },
  },
  defaultVariants: {
    isSelected: false,
    isFocused: false,
  },
});

// No items found message styles
export const noItemsMessage = cva('p-2 text-xs text-gray-600', {
  variants: {
    isOpen: {
      true: '',
      false: 'hidden',
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});
