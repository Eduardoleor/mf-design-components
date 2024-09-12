import { cn } from '@/utils';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';
import inputStyles from './styles';

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input ref={ref} type="text" autoComplete="off" className={cn(inputStyles({ className }))} {...props} />;
});
