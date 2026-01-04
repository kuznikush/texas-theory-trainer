import type { TheoryImage, TheorySection } from "../types";
import { resolveAssetPath } from "../utils";

const calloutLabels: Record<string, string> = {
  remember: "Remember",
  example: "Example",
  penalty: "Penalty",
  mistake: "Common mistake",
};

export default function Accordion({
  items,
  imageManifest,
}: {
  items: TheorySection[];
  imageManifest: Record<string, TheoryImage>;
}) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details key={item.id} className="accordion-item">
          <summary>
            <div className="accordion-summary">
              <h3>{item.heading}</h3>
              <p className="muted">{item.summary}</p>
            </div>
          </summary>
          <div className="accordion-content">
            {item.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {item.bullets && (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {item.images && (
              <div className="topic-image-grid">
                {item.images.map((imageId) => {
                  const image = imageManifest[imageId];
                  if (!image) return null;
                  return (
                    <figure key={image.id} className="topic-image">
                      <img src={resolveAssetPath(image.localPath)} alt={image.title} />
                      <figcaption className="muted small">
                        Source: {" "}
                        <a href={image.sourceUrl} target="_blank" rel="noreferrer">
                          Wikimedia Commons
                        </a>
                        {image.licenseAttribution ? ` · ${image.licenseAttribution}` : ""}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            )}
            {item.callouts?.map((callout) => (
              <aside key={`${callout.type}-${callout.title}`} className={`callout ${callout.type}`}>
                <div className="callout-title">
                  {calloutLabels[callout.type] ?? callout.title}
                </div>
                <p>{callout.text}</p>
              </aside>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
