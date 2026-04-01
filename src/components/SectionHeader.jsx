import { cn } from '../utils/classNames';

export default function SectionHeader({ eyebrow, title, description, action, className }) {
  return (
    <div className={cn('mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between', className)}>
      <div className="max-w-2xl">
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h2 className="title-block text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
        {description ? (
          <p className="mt-4 max-w-xl text-sm font-medium uppercase tracking-[0.14em] text-raw-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
