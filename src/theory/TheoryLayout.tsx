import type { ReactNode } from "react";

export default function TheoryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page theory-layout">
      {children}
    </div>
  );
}
