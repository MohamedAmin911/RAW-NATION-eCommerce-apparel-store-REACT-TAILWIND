import { cn } from './classNames';

const baseStyles =
  'inline-flex items-center justify-center gap-2 border-4 border-raw-border font-headline text-sm font-black uppercase tracking-[0.18em] transition duration-150 transition-snappy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raw-ink disabled:pointer-events-none disabled:opacity-50';

const variantStyles = {
  primary: 'bg-raw-warning text-raw-ink hover:-translate-y-0.5 hover:shadow-hard active:translate-y-0',
  outline: 'bg-transparent text-raw-ink hover:bg-raw-ink hover:text-white',
  inverse: 'bg-raw-ink text-white hover:bg-raw-night-soft',
  ghost: 'border-transparent bg-transparent text-raw-ink hover:bg-raw-panel',
};

const sizeStyles = {
  sm: 'px-4 py-3',
  md: 'px-5 py-4',
  lg: 'px-7 py-5 text-base',
};

export function buttonStyles({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
} = {}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className);
}
