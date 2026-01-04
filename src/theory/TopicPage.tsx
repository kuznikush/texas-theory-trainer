import ZoomableImage from "../components/ZoomableImage";
import ExpandableSection from "../components/ExpandableSection";
import type { TheoryTopic } from "./content";

const calloutLabels: Record<string, string> = {
  remember: "Remember",
  example: "Example",
  penalty: "Penalty",
  "common-mistake": "Common mistake",
};

const calloutVariants: Record<string, string> = {
  "common-mistake": "mistake",
};

const formatInlineMarkdown = (text: string) =>
  text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");

const renderRichText = (text: string) => (
  <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(text) }} />
);

export default function TopicPage({ topic }: { topic: TheoryTopic }) {
  return (
    <article className="theory-topic">
      <header className="theory-topic-header">
        <div>
          <p className="breadcrumb">
            <a href="#/theory">← Back to Theory</a>
          </p>
          <h1>
            {topic.icon} {topic.title}
          </h1>
          <p className="muted">{topic.intro}</p>
        </div>
      </header>

      <section className="card">
        <h2>What you’ll learn</h2>
        <p>{topic.whatYouWillLearn}</p>
      </section>

      <section className="card">
        <h2>Decision rules</h2>
        <ol>
          {topic.decisionRules.map((rule) => (
            <li key={rule}>{renderRichText(rule)}</li>
          ))}
        </ol>
      </section>

      <section className="card">
        <h2>TL;DR</h2>
        <ul>
          {topic.tldr.map((item) => (
            <li key={item}>{renderRichText(item)}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Learn more</h2>
        <div className="accordion">
          {topic.sections.map((section) => (
            <ExpandableSection key={section.id} title={section.title} summary={section.summary}>
              <>
                {section.learnMore.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{renderRichText(bullet)}</li>
                    ))}
                  </ul>
                )}
                {section.images && (
                  <div className="zoomable-image-grid">
                    {section.images.map((image) => (
                      <ZoomableImage key={image.src} image={image} />
                    ))}
                  </div>
                )}
                {section.callouts?.map((callout) => {
                  const calloutVariant =
                    calloutVariants[callout.variant] ?? callout.variant;
                  const calloutLabel =
                    callout.title || calloutLabels[callout.variant] || "Note";
                  return (
                    <aside
                      key={`${section.id}-${callout.title}-${callout.body}`}
                      className={`callout ${calloutVariant}`}
                    >
                      <div className="callout-title">{calloutLabel}</div>
                      <p>{renderRichText(callout.body)}</p>
                    </aside>
                  );
                })}
              </>
            </ExpandableSection>
          ))}
        </div>
      </section>

      <section className="card callout mistake">
        <h2>Common mistakes</h2>
        <ul>
          {topic.commonMistakes.map((mistake) => (
            <li key={mistake}>{renderRichText(mistake)}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
