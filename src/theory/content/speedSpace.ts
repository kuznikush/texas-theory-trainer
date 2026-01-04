import type { TheoryTopic } from "./types";

export const speedSpaceTopic: TheoryTopic = {
  slug: "speed-space",
  title: "Speed & space",
  icon: "📏",
  intro:
    "Safe driving is mostly space management: picking a speed you can control and leaving room to stop and steer.",
  whatYouWillLearn:
    "How to choose a safe speed for conditions, keep a safe following distance, and avoid the most common rear-end and loss-of-control crashes.",

  decisionRules: [
    "Drive at a speed that matches visibility, traction, and traffic — not just the posted limit.",
    "Keep enough following distance to stop smoothly if the vehicle ahead brakes hard.",
    "Increase space in rain/night/heavy traffic and when behind motorcycles, buses, or large trucks.",
    "If you can’t see a safe path, slow down until you can.",
  ],

  tldr: [
    "The posted limit is a ceiling under ideal conditions — conditions may require slower speeds.",
    "Increase following distance in rain, at night, or when you’re being tailgated.",
    "Don’t ‘match speed’ blindly — match the flow only when it’s safe and legal.",
    "Leave yourself an escape route (space to the sides) when possible.",
  ],

  sections: [
    {
      id: "safe-speed",
      title: "Choosing a safe speed",
      summary: "Your speed must fit conditions: visibility + traction + traffic complexity.",
      learnMore: [
        "A safe speed is one that lets you stop within the distance you can see is clear.",
        "Bad conditions (rain, glare, darkness, congestion) reduce the time you have to react and reduce traction.",
        "If you feel rushed, slow down early — sudden braking or swerving is what creates crashes.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "If you can’t stop in the space you can see, you’re driving too fast for conditions.",
        },
      ],
    },

    {
      id: "following-distance",
      title: "Following distance",
      summary: "Most ‘safe driving’ is not tailgating — leave a buffer for surprises.",
      learnMore: [
        "A following-distance rule of thumb is to pick a fixed point and ensure enough time passes between the car ahead and you reaching that point.",
        "Increase distance when you’re behind a large truck (you can’t see around it) or when roads are wet (longer stopping distance).",
        "If someone tailgates you, don’t ‘teach them a lesson’ — increase your following distance ahead and consider changing lanes to let them pass.",
      ],
      callouts: [
        {
          variant: "common-mistake",
          title: "Common mistake",
          body: "Following closely because ‘I’m paying attention.’ Even perfect attention can’t change physics.",
        },
      ],
    },

    {
      id: "space-cushion",
      title: "Space cushion and escape routes",
      summary: "Give yourself room to steer, not just to brake.",
      learnMore: [
        "Try not to drive boxed-in between vehicles. If a hazard appears, braking isn’t the only option — steering might be safer.",
        "Avoid driving in other vehicles’ blind spots (especially trucks).",
        "In multi-lane traffic, prefer a position where you have at least one open adjacent lane.",
      ],
      callouts: [
        {
          variant: "example",
          title: "Example",
          body: "If you’re next to a truck for a long time, you may be invisible to them. Either pass decisively or drop back.",
        },
      ],
    },

    {
      id: "night-driving",
      title: "Night driving and headlight distance",
      summary: "At night your stopping distance can exceed what your headlights reveal.",
      learnMore: [
        "Visibility is reduced at night, even on familiar roads.",
        "Adjust speed so you can stop within the illuminated area ahead.",
        "Dim headlights for oncoming traffic and when following another vehicle closely (avoid glare).",
      ],
    },

    {
      id: "weather",
      title: "Rain, hydroplaning, and reduced traction",
      summary: "Wet roads change everything: slower, smoother, more space.",
      learnMore: [
        "Rain reduces traction and increases stopping distance. Smooth steering/braking helps you maintain control.",
        "If traction is poor, avoid abrupt lane changes and sudden braking.",
        "If visibility is reduced, slow down and increase following distance.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "Smooth inputs (steer/brake/accelerate) keep traction. Sudden inputs break traction.",
        },
      ],
    },
  ],

  commonMistakes: [
    "Tailgating because you’re ‘in a hurry.’",
    "Driving the posted limit even when visibility/traction is bad.",
    "Panic braking instead of slowing earlier and leaving space.",
    "Sitting in blind spots or driving boxed-in with no escape route.",
  ],
};
