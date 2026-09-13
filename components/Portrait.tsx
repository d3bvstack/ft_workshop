import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

export const portraitVariants = cva('rounded-[4px] object-cover flex-shrink-0', {
  variants: {
    size: {
      sm: 'w-[36px] h-[36px]',
      md: 'w-[52px] h-[52px]',
      lg: 'w-[72px] h-[72px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface PortraitProps
  extends Omit<React.ComponentProps<'img'>, 'alt'>,
    VariantProps<typeof portraitVariants> {
  alt: string;
}

export const Portrait = React.forwardRef<HTMLImageElement, PortraitProps>(
  ({ className, size, ...props }, ref) => (
    <img
      ref={ref}
      className={cn(portraitVariants({ size }), className)}
      {...props}
    />
  )
);
Portrait.displayName = 'Portrait';
