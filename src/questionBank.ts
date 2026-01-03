import type { Question } from "./types";

export const questionBank: Question[] = [
  {
    id: "q-row-001",
    topic: "Right-of-way",
    prompt: "You are entering a highway using an acceleration lane. Who has the right-of-way?",
    choices: [
      { id: "A", text: "Vehicles merging onto the highway" },
      { id: "B", text: "Vehicles already on the highway" },
      { id: "C", text: "Whichever vehicle is faster" },
      { id: "D", text: "The vehicle in the left lane" }
    ],
    correctChoiceId: "B",
    explanation:
      "Merging traffic must yield to vehicles already on the highway. Use the acceleration lane to match speed and merge when safe."
  },
  {
    id: "q-sig-001",
    topic: "Signals",
    prompt: "You want to turn right at a red light and there is no sign prohibiting it. What must you do first?",
    choices: [
      { id: "A", text: "Slow down and turn if the lane is clear" },
      { id: "B", text: "Stop completely, then yield and turn when safe" },
      { id: "C", text: "Honk and proceed carefully" },
      { id: "D", text: "Turn only if you see a green arrow" }
    ],
    correctChoiceId: "B",
    explanation:
      "Right turn on red is allowed after a complete stop unless prohibited. You must yield to cross traffic, pedestrians, and cyclists."
  }
];
