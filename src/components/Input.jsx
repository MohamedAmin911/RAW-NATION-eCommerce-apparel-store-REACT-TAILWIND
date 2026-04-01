import { forwardRef } from 'react';
import { cn } from '../utils/classNames';

const variantStyles = {
  underline:
    'border-x-0 border-t-0 border-b-4 border-raw-border bg-transparent px-0 py-4 text-base uppercase tracking-[0.08em] placeholder:text-raw-muted/45 focus:border-raw-warning focus:bg-raw-warning/10',
  panel:
    'border-4 border-raw-border bg-white px-4 py-3 text-sm uppercase tracking-[0.08em] placeholder:text-raw-muted/55 focus:bg-raw-warning/10',
};

const Input = forwardRef(function Input(
  {
    label,
    error,
    helperText,
    variant = 'underline',
    className,
    containerClassName,
    ...props
  },
  ref,
) {
  return (
    <label className={cn('block', containerClassName)}>
      {label ? (
        <span className="mb-2 block font-headline text-[0.62rem] font-black uppercase tracking-[0.28em] text-raw-muted">
          {label}
        </span>
      ) : null}
      <input
        ref={ref}
        className={cn(
          'w-full outline-none transition duration-150 transition-snappy',
          variantStyles[variant],
          error && 'border-[#b42318] bg-[#fff1ef]',
          className,
        )}
        {...props}
      />
      {error ? (
        <span className="mt-2 block text-xs font-semibold tracking-wide text-[#b42318]">{error}</span>
      ) : null}
      {!error && helperText ? (
        <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.16em] text-raw-muted">
          {helperText}
        </span>
      ) : null}
    </label>
  );
});

export default Input;
