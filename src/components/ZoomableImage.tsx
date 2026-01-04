import { useEffect, useId, useRef, useState } from "react";
import { resolveAssetPath } from "../utils";
import type { TopicImage } from "../theory/content/rightOfWay";

export default function ZoomableImage({ image }: { image: TopicImage }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const captionId = useId();
  const attributionId = useId();
  const thumbnailCaptionId = `${captionId}-thumbnail`;
  const thumbnailAttributionId = `${attributionId}-thumbnail`;
  const modalCaptionId = `${captionId}-modal`;
  const modalAttributionId = `${attributionId}-modal`;

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const imageSrc = resolveAssetPath(image.src);

  return (
    <figure className="zoomable-image-card">
      <button
        type="button"
        className="zoomable-image-trigger"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        <img src={imageSrc} alt={image.alt} loading="lazy" />
      </button>
      <figcaption
        className="zoomable-image-caption muted small"
        id={thumbnailCaptionId}
      >
        <div className="zoomable-image-caption-title">{image.caption}</div>
        <div className="zoomable-image-caption-source" id={thumbnailAttributionId}>
          Source:{" "}
          <a href={image.sourceUrl} target="_blank" rel="noreferrer">
            {image.sourceLabel}
          </a>
          {image.license ? ` · ${image.license}` : ""}
        </div>
      </figcaption>

      {isOpen && (
        <div
          className="image-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalCaptionId}
          aria-describedby={modalAttributionId}
          onClick={() => setIsOpen(false)}
        >
          <div className="image-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setIsOpen(false)}
              ref={closeButtonRef}
              aria-label="Close image"
            >
              ✕
            </button>
            <img src={imageSrc} alt={image.alt} />
            <div className="image-modal-caption" id={modalCaptionId}>
              <div className="image-modal-caption-title">{image.caption}</div>
              <div className="image-modal-caption-source" id={modalAttributionId}>
                Source:{" "}
                <a href={image.sourceUrl} target="_blank" rel="noreferrer">
                  {image.sourceLabel}
                </a>
                {image.license ? ` · ${image.license}` : ""}
              </div>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
}
