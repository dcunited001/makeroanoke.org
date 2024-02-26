import type { HTMLAttributes } from 'astro/types';
import { cva, type VariantProps } from 'class-variance-authority';

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
      xs: ['text-xs', 'py-1', 'px-2'],
      sm: ['text-sm', 'py-1', 'px-2'],
      md: ['text-sm', 'py-2', 'px-4'],
      lg: ['text-sm', 'py-2', 'px-4'],
      xl: ['text-sm', 'py-2', 'px-4'],
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
