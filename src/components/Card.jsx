import { cn } from '../utils/classNames';

export default function Card({ className, children, ...props }) {
  return (
    <div className={cn('frame-panel shadow-frame', className)} {...props}>
      {children}
    </div>
  );
}
