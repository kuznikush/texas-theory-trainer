import Accordion from "../components/Accordion";
import { theoryImageManifest, theoryTopics } from "../data/theoryTopics";

export default function TheoryTopicPage({ slug }: { slug: string }) {
  const topic = theoryTopics.find((item) => item.slug === slug);

  if (!topic) {
    return (
      <div className="card">
        <h2>Topic not found</h2>
        <p className="muted">Return to the Theory overview to pick a topic.</p>
        <a href="#/theory" className="btn">
          Back to Theory
        </a>
      </div>
    );
  }

  return (
    <article className="theory-topic">
      <header className="theory-topic-header">
        <div>
          <p className="breadcrumb">
            <a href="#/theory">← Back to Theory</a>
          </p>
          <h1>
            {topic.emoji} {topic.title}
          </h1>
          <p className="muted">{topic.intro}</p>
        </div>
      </header>

      <section className="card">
        <h2>What you’ll learn</h2>
        <p>{topic.intro}</p>
      </section>

      <section className="card">
        <h2>TL;DR</h2>
        <ul>
          {topic.tldr.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Learn more</h2>
        <Accordion items={topic.sections} imageManifest={theoryImageManifest} />
      </section>

      {topic.commonMistakes && (
        <section className="card callout mistake">
          <h2>Common mistakes</h2>
          <ul>
            {topic.commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
