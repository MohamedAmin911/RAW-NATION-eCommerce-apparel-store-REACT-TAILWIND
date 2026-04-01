import { buttonStyles } from '../utils/buttonStyles';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  fullWidth = false,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  );
}
