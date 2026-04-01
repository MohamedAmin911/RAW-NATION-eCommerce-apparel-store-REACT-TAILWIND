import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

export default function Modal({ open, title, description, children, onClose }) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm">
      <div className="frame-panel shadow-hard w-full max-w-2xl bg-raw-surface p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="title-block text-3xl sm:text-4xl">{title}</h3>
            {description ? (
              <p className="mt-3 max-w-lg text-sm font-medium uppercase tracking-[0.16em] text-raw-muted">
                {description}
              </p>
            ) : null}
          </div>
          <Button variant="ghost" className="px-3 py-2" onClick={onClose}>
            Close
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}
