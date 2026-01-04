import { useMemo, useState } from "react";
import type { ExamConfig, Question } from "./types";
import questionBankData from "./questionBank.json";
import { shuffle } from "./utils";
import "./app.css";

type AnswerState = {
  [questionId: string]: {
    selectedChoiceId?: string;
    isCorrect?: boolean;
  };
};

const questionBank = questionBankData as Question[];

const DEFAULT_CONFIG: ExamConfig = {
  mode: "practice",
  numQuestions: 10,
  shuffleChoices: true,
  shuffleQuestions: true,
  timeLimitSec: 20 * 60,
};

function pickQuestions(bank: Question[], cfg: ExamConfig): Question[] {
  const base = cfg.shuffleQuestions ? shuffle(bank) : [...bank];
  return base.slice(0, Math.min(cfg.numQuestions, base.length)).map((q) => ({
    ...q,
    choices: cfg.shuffleChoices ? shuffle(q.choices) : q.choices,
  }));
}

export default function App() {
  const [config, setConfig] = useState<ExamConfig>(DEFAULT_CONFIG);
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [finished, setFinished] = useState(false);

  const current = questions[index];
  const total = questions.length;

  const score = useMemo(() => {
    let correct = 0;
    for (const q of questions) {
      if (answers[q.id]?.isCorrect) correct++;
    }
    return { correct, total };
  }, [answers, questions, total]);

  function start() {
    const picked = pickQuestions(questionBank, config);
    setQuestions(picked);
    setIndex(0);
    setAnswers({});
    setFinished(false);
    setStarted(true);
  }

function select(choiceId: string) {
  if (!current) return;

  // In exam mode, do not allow changing an answer
  if (config.mode === "exam" && answers[current.id]?.selectedChoiceId) {
    return;
  }

  const isCorrect = choiceId === current.correctChoiceId;

  setAnswers((prev) => ({
    ...prev,
    [current.id]: { selectedChoiceId: choiceId, isCorrect },
  }));
}


  function go(delta: number) {
    setIndex((i) => Math.max(0, Math.min(i + delta, total - 1)));
  }

  if (!started) {
    return (
      <div className="page">
        <header className="header">
          <div>
            <h1>Texas Theory Trainer</h1>
            <p className="muted">Practice & simulate the Texas DPS knowledge exam.</p>
          </div>
        </header>

        <div className="card">
          <h2>Setup</h2>

          <label className="row">
            <span>Mode</span>
            <select
              value={config.mode}
              onChange={(e) => setConfig((c) => ({ ...c, mode: e.target.value as any }))}
            >
              <option value="practice">Practice</option>
              <option value="exam">Exam</option>
            </select>
          </label>

          <label className="row">
            <span># Questions</span>
            <input
              type="number"
              min={2}
              max={100}
              value={config.numQuestions}
              onChange={(e) => setConfig((c) => ({ ...c, numQuestions: Number(e.target.value) }))}
            />
          </label>

          <label className="row">
            <span>Shuffle questions</span>
            <input
              type="checkbox"
              checked={config.shuffleQuestions}
              onChange={(e) => setConfig((c) => ({ ...c, shuffleQuestions: e.target.checked }))}
            />
          </label>

          <label className="row">
            <span>Shuffle choices</span>
            <input
              type="checkbox"
              checked={config.shuffleChoices}
              onChange={(e) => setConfig((c) => ({ ...c, shuffleChoices: e.target.checked }))}
            />
          </label>

          <button className="btn primary" onClick={start}>
            Start
          </button>

          <p className="muted small">
            Add questions in <code>src/questionBank.json</code>.
          </p>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = total ? Math.round((score.correct / total) * 100) : 0;

    return (
      <div className="page">
        <header className="header">
          <div>
            <h1>Results</h1>
            <p className="muted">
              Score: <b>{score.correct}</b> / {total} ({pct}%)
            </p>
          </div>
        </header>

        <div className="card">
          <button className="btn" onClick={() => setStarted(false)}>
            Back to setup
          </button>
          <button className="btn primary" onClick={start} style={{ marginLeft: 10 }}>
            Restart
          </button>
        </div>

        <div className="card">
          <h2>Review</h2>
          <ol>
            {questions.map((q) => {
              const a = answers[q.id];
              return (
                <li key={q.id} style={{ marginBottom: 12 }}>
                  <div><b>{q.topic}</b></div>
                  <div>{q.prompt}</div>
                  <div className="muted small">
                    Your answer: <b>{a?.selectedChoiceId ?? "—"}</b> · Correct:{" "}
                    <b>{q.correctChoiceId}</b>
                  </div>
                  {q.explanation && <div className="muted small">{q.explanation}</div>}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="page">
        <div className="card">
          <p>No questions loaded.</p>
          <button className="btn" onClick={() => setStarted(false)}>Back</button>
        </div>
      </div>
    );
  }

  const a = answers[current.id];
  const selected = a?.selectedChoiceId;

  return (
    <div className="page">
      <header className="header">
        <div>
          <h1>Texas Theory Trainer</h1>
          <p className="muted">
            Q {index + 1} / {total} · Score: <b>{score.correct}</b> / {total}
          </p>
        </div>
      </header>

      <div className="card">
        <div className="prompt">{current.prompt}</div>

        <div className="choices">
          {current.choices.map((c) => (
            <button
              key={c.id}
              className={`choice ${selected === c.id ? "picked" : ""}`}
              onClick={() => select(c.id)}
            >
              <span className="choiceId">{c.id}</span>
              <span>{c.text}</span>
            </button>
          ))}
        </div>

        {config.mode === "practice" && selected && current.explanation && (
          <div className="muted small">
            <b>Why:</b> {current.explanation}
          </div>
        )}

        <div className="actions">
          <button className="btn" onClick={() => go(-1)} disabled={index === 0}>
            ← Prev
          </button>
          <button className="btn" onClick={() => go(1)} disabled={index === total - 1}>
            Next →
          </button>
          <button className="btn primary" onClick={() => setFinished(true)}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
