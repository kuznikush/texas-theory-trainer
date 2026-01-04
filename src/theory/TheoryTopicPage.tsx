import {
  laneChangesPassingTopic,
  rightOfWayTopic,
  rulesPenaltiesTopic,
  signsSignalsTopic,
  specialSituationsTopic,
  speedSpaceTopic,
} from "./content";
import TopicPage from "./TopicPage";

const theoryTopics = [
  rightOfWayTopic,
  signsSignalsTopic,
  speedSpaceTopic,
  laneChangesPassingTopic,
  specialSituationsTopic,
  rulesPenaltiesTopic,
];

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

  return <TopicPage topic={topic} />;
}
