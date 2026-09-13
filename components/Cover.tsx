import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

export const coverVariants = cva('rounded-[4px] object-cover flex-shrink-0', {
  variants: {
    size: {
      sm: 'w-[36px] h-[58px]',
      md: 'w-[52px] h-[83px]',
      lg: 'w-[72px] h-[115px]',
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
