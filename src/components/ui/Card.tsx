'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
  tilt?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      hover = true,
      tilt = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-2xl transition-all duration-300';

    const variants = {
      default:
        'bg-white dark:bg-foreground/5 border border-foreground/5',
      elevated:
        'bg-white dark:bg-foreground/5 shadow-lg',
      outlined:
        'bg-transparent border-2 border-foreground/10',
      glass:
        'bg-white/10 dark:bg-foreground/5 backdrop-blur-lg border border-white/20',
    };

    const hoverStyles = hover
      ? 'hover:shadow-2xl hover:-translate-y-2'
      : '';

    const tiltStyles = tilt
      ? 'transform-gpu perspective-1000'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          hoverStyles,
          tiltStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
