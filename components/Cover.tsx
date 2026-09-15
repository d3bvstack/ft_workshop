import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

export const coverVariants = cva('rounded-[4px] object-cover flex-shrink-0', {
  variants: {
    size: {
      xs: 'w-[32px] h-[51px]',
      sm: 'w-[52px] h-[83px]',
      md: 'w-[168px] h-[269px]',
      lg: 'w-[260px] h-[416px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface CoverProps
  extends Omit<React.ComponentProps<'img'>, 'alt'>,
    VariantProps<typeof coverVariants> {
  alt: string;
}

export const Cover = React.forwardRef<HTMLImageElement, CoverProps>(
  ({ className, size, alt, ...props }, ref) => (
    <img
      ref={ref}
      alt={alt}
      className={cn(coverVariants({ size }), className)}
      {...props}
    />
  )
);
Cover.displayName = 'Cover';
