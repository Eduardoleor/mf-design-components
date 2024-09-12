import { ComponentPropsWithRef, forwardRef } from 'react';

export type TextProps = ComponentPropsWithRef<'p'>;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(({ className, children, ...props }, ref) => {
  return (
    <p ref={ref} className={className} {...props}>
      {children}
    </p>
  );
});
