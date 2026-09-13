import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button as BaseButton } from '@base-ui/react/button';
import { cn } from '../lib/utils';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium select-none typeset',
    // Smooth transitions for colors and transforms
    'transition-[color,background-color,border-color,opacity,box-shadow,transform] duration-150 active:translate-y-px',
    // Focus ring styling
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    // Native disabled & Base UI data-disabled states
    'disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    // Automatic SVG handling (icon agnostic)
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white shadow-sm hover:bg-primary-dark active:bg-primary-active',
        secondary:
          'bg-secondary text-text-secondary shadow-sm hover:bg-secondary-dark active:bg-secondary-active',
        outline:
          'border border-primary text-primary bg-transparent shadow-sm hover:bg-primary/10 active:bg-primary/20',
        ghost:
          'bg-transparent text-text-secondary hover:bg-secondary/50 active:bg-secondary/80',
        destructive:
          'bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800',
        link:
          'bg-transparent text-primary underline-offset-4 hover:underline active:text-primary-dark p-0 h-auto',
      },
      size: {
        sm: 'h-8 px-3 text-xs [&_svg]:size-3.5',
        md: 'h-10 px-4 py-2 text-sm [&_svg]:size-4',
        lg: 'h-12 px-6 text-base [&_svg]:size-5',
        // Dedicated square icon sizes to prevent padding collisions
        'icon-sm': 'size-8 p-0 [&_svg]:size-3.5',
        'icon-md': 'size-10 p-0 [&_svg]:size-4',
        'icon-lg': 'size-12 p-0 [&_svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends Omit<BaseButton.Props, 'className'>,
    VariantProps<typeof buttonVariants> {
  className?: string | ((state: BaseButton.State) => string | undefined);
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      startIcon,
      endIcon,
      children,
      ...props
    },
    ref
  ) => {
    const variantClassName = buttonVariants({ variant, size });

    // Handle both static strings and Base UI's functional state callbacks
    const resolvedClassName = (state: BaseButton.State) => {
      const userClassName = typeof className === 'function' ? className(state) : className;
      return cn(variantClassName, userClassName);
    };

    return (
      <BaseButton
        ref={ref}
        className={resolvedClassName}
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
      </BaseButton>
    );
  }
);
Button.displayName = 'Button';

// Primitive subcomponent for granular composition (dual-export pattern)
BaseButton.displayName = 'Button.Primitive';
export { BaseButton as ButtonPrimitive };
