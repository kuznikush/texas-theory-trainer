import type { ReactNode } from "react";

type AppLayoutProps = {
  currentPath: string;
  children: ReactNode;
};

export default function AppLayout({ currentPath, children }: AppLayoutProps) {
  const isTheory = currentPath.startsWith("/theory");
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-brand">
          <span className="brand-mark">🚗</span>
          <div>
            <div className="brand-title">Texas Theory Trainer</div>
            <div className="muted small">Learn the rules. Pass with confidence.</div>
          </div>
        </div>
        <nav className="site-nav" aria-label="Primary">
          <a href="#/" className={`nav-link${isTheory ? "" : " active"}`}>
            Practice/Exam
          </a>
          <a href="#/theory" className={`nav-link${isTheory ? " active" : ""}`}>
            Theory
          </a>
        </nav>
      </header>
      <main className="app-main">
        {children}
      </main>
    </div>
  );
}
