import { useEffect, useMemo, useState } from "react";
import AppLayout from "./components/AppLayout";
import QuizPage from "./pages/QuizPage";
import TheoryLandingPage from "./theory/TheoryLandingPage";
import TheoryLayout from "./theory/TheoryLayout";
import TheoryTopicPage from "./theory/TheoryTopicPage";

function getHashPath() {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return "/";
  return raw.startsWith("/") ? raw : `/${raw}`;
}

function NotFound() {
  return (
    <div className="page">
      <div className="card">
        <h2>Page not found</h2>
        <p className="muted">Try the Practice/Exam or Theory sections from the navigation.</p>
      </div>
    </div>
  );
}

export default function App() {
  const [path, setPath] = useState(getHashPath());

  useEffect(() => {
    const onHashChange = () => setPath(getHashPath());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const content = useMemo(() => {
    if (path === "/" || path === "") {
      return <QuizPage />;
    }

    if (path === "/theory") {
      return (
        <TheoryLayout>
          <TheoryLandingPage />
        </TheoryLayout>
      );
    }

    if (path.startsWith("/theory/")) {
      const slug = decodeURIComponent(path.replace("/theory/", ""));
      return (
        <TheoryLayout>
          <TheoryTopicPage slug={slug} />
        </TheoryLayout>
      );
    }

    return <NotFound />;
  }, [path]);

  return (
    <AppLayout currentPath={path}>{content}</AppLayout>
  );
}
