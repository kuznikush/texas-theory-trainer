import TopicCard from "../theory/TopicCard";
import { theoryTopics } from "../data/theoryTopics";

export default function TheoryLandingPage() {
  return (
    <div>
      <header className="theory-hero">
        <div>
          <h1>📘 Theory</h1>
          <p className="muted">
            Learn the Texas DPS rules in short, scannable lessons. Start with the basics or
            jump into a deep dive.
          </p>
        </div>
        <div className="theory-hero-card">
          <h2>How to use this section</h2>
          <ul>
            <li>Skim the TL;DR to lock in the core rules.</li>
            <li>Open “Learn more” to see examples and edge cases.</li>
            <li>Review common mistakes before you take the exam.</li>
          </ul>
        </div>
      </header>

      <section className="topic-grid" aria-label="Theory topics">
        {theoryTopics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </section>
    </div>
  );
}
