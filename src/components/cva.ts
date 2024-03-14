import type { HTMLAttributes } from 'astro/types';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const buttonCVA = cva('font-semibold shadow-md capitalize', {
  variants: {
    intent: {
      primary: [
        'bg-teal-700',
        'text-white',
        'hover:bg-teal-800',
        'active:bg-teal-900',
        'focus-visible:outline',
        'focus-visible:outline-2',
        'focus-visible:outline-offset-2',
        'focus-visible:outline-teal-700',
      ],

      secondary: [
        'bg-white',
        'text-gray-900',
        'ring-1',
        'ring-inset',
        'ring-gray-300',
        'hover:bg-gray-50',
        'active:bg-gray-100',
      ],
      soft: [
        'bg-indigo-50',
        'text-teal-700',
        'hover:bg-teal-100',
        'active:bg-teal-200',
      ],
    },
    size: {
      xs: ['text-xs', 'py-0.5', 'px-2'],
      sm: ['text-sm', 'py-0.5', 'px-2'],
      md: ['text-sm', 'py-1', 'px-3'],
      lg: ['text-sm', 'py-1', 'px-3'],
      xl: ['text-sm', 'py-1', 'px-3'],
    },
    rounded: {
      normal: '',
      full: 'rounded-full',
    },
    // TODO: iconOnly class and variants
    _content: {
      text: '',
      textAndIcon: 'inline-flex items-center',
      icon: '',
    },
  },
  // compoundVariants: [{ intent: "primary", size: "md" }],
  compoundVariants: [
    { size: ['xs', 'sm'], rounded: 'normal', className: 'rounded' },
    { size: ['md', 'lg', 'xl'], rounded: 'normal', className: 'rounded-md' },
    {
      size: ['xs', 'sm'],
      _content: ['text', 'textAndIcon'],
      className: 'gap-x-1.5 px-2 py-1',
    },
    {
      size: ['md', 'lg', 'xl'],
      _content: ['text', 'textAndIcon'],
      className: 'gap-x-2',
    },
    {
      size: 'md',
      _content: ['text', 'textAndIcon'],
      className: 'px-2.5 py-1.5',
    },
    {
      size: 'lg',
      _content: ['text', 'textAndIcon'],
      className: 'px-3 py-2',
    },
    {
      size: 'xl',
      _content: ['text', 'textAndIcon'],
      className: 'px-3.5 py-2.5',
    },
    { size: 'xs', _content: 'icon', className: 'p-0.5' },
    { size: 'sm', _content: 'icon', className: 'p-1' },
    { size: 'md', _content: 'icon', className: 'p-1.5' },
    { size: 'lg', _content: 'icon', className: 'p-2' },
    { size: 'xl', _content: 'icon', className: 'p-2.5' },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'md',
    rounded: 'full',
    _content: 'text',
  },
});
// destructive:

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      // <Badge/> will get a variant="variantName" attribute
      variant: {
        default:
          'border-primary bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-secondary bg-secondary text-secondary-foreground hover:bg-accent-1/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<'div'>,
    VariantProps<typeof badgeVariants> {}
