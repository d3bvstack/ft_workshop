import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

export const logoVariants = cva('inline-flex items-center gap-2 text-primary font-medium', {
  variants: {
    variant: {
      both: '',
      iconOnly: '',
      typeOnly: '',
    },
  },
  defaultVariants: {
    variant: 'both',
  },
});

export interface LogoProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
  label?: string;
}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ variant = 'both', label = 'ftLogo', className, ...props }, ref) => {
    const icon = <BookOpen className="size-6" aria-label="Logo icon" />;

    const type = (
      <span className="typeset font-medium text-primary leading-none">
        {label}
      </span>
    );

    const showIcon = variant === 'iconOnly' || variant === 'both';
    const showType = variant === 'typeOnly' || variant === 'both';

    return (
      <div
        ref={ref}
        role="img"
        aria-label={label}
        className={cn(logoVariants({ variant, className }))}
        {...props}
      >
        {showIcon && icon}
        {showType && type}
      </div>
    );
  }
);

Logo.displayName = 'Logo';
