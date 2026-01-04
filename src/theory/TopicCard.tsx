import type { TheoryTopic } from "../types";

export default function TopicCard({ topic }: { topic: TheoryTopic }) {
  return (
    <a href={`#/theory/${topic.slug}`} className="topic-card">
      <div className="topic-card-emoji" aria-hidden="true">
        {topic.emoji}
      </div>
      <div>
        <h3>{topic.title}</h3>
        <p className="muted">{topic.intro}</p>
        <span className="topic-card-cta">Explore →</span>
      </div>
    </a>
  );
}
