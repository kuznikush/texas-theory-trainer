import type { PropsWithChildren, ReactNode } from "react";
import { useId, useState } from "react";

type ExpandableSectionProps = PropsWithChildren<{
  title: ReactNode;
  summary?: ReactNode;
  defaultOpen?: boolean;
}>;

export default function ExpandableSection({
  title,
  summary,
  defaultOpen = false,
  children,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  const handleToggle = (event: React.SyntheticEvent<HTMLDetailsElement>) => {
    setOpen(event.currentTarget.open);
  };

  return (
    <details className="accordion-item" open={open} onToggle={handleToggle}>
      <summary
        className="accordion-header"
        role="button"
        aria-expanded={open}
        aria-controls={contentId}
      >
        <div className="accordion-summary">
          <div className="accordion-title">
            {typeof title === "string" ? <h3>{title}</h3> : title}
            {summary ? <p className="muted">{summary}</p> : null}
          </div>
          <span className="accordion-chevron" aria-hidden="true">
            ▸
          </span>
        </div>
      </summary>
      <div id={contentId} className="accordion-content">
        {children}
      </div>
    </details>
  );
}
