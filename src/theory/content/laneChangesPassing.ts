import type { TheoryTopic } from "./types";

export const laneChangesPassingTopic: TheoryTopic = {
  slug: "lane-changes-passing",
  title: "Lane changes & passing",
  icon: "↔️",
  intro:
    "Lane changes are where ‘small mistakes’ become big crashes. Learn a repeatable routine that works every time.",
  whatYouWillLearn:
    "How to change lanes predictably, avoid blind spots, pass safely, and handle tricky multi-lane situations.",

  decisionRules: [
    "Only change lanes when it’s legal AND you have a clear gap.",
    "Signal early, check mirrors, then check the blind spot, then move smoothly.",
    "Don’t change lanes in intersections; finish one task before starting another.",
    "Pass only when you can complete the pass without forcing anyone to brake.",
  ],

  tldr: [
    "Mirror → signal → blind spot → smooth move.",
    "A turn signal is a request, not a right — you still need a gap.",
    "Avoid lingering in blind spots (especially trucks).",
    "Don’t weave. One safe lane change beats three risky ones.",
  ],

  sections: [
    {
      id: "lane-change-routine",
      title: "The lane change routine",
      summary: "Make it automatic: mirror, signal, blind spot, move.",
      learnMore: [
        "Check your mirrors to understand traffic speed and spacing.",
        "Signal early so others can predict you; give them time to react.",
        "Check your blind spot with a quick shoulder glance — mirrors do not show everything.",
        "Move smoothly into the lane; avoid sudden steering that can cause loss of control.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "If you’re not sure it’s clear, it’s not clear enough.",
        },
      ],
    },

    {
      id: "blind-spots",
      title: "Blind spots (especially trucks)",
      summary: "If you can’t see their mirrors, assume they can’t see you.",
      learnMore: [
        "Large trucks have bigger blind spots to the sides and behind.",
        "Avoid hanging out beside trucks; pass decisively or fall back.",
        "Be extra careful when a truck is turning — they may swing wide and need space.",
      ],
      callouts: [
        {
          variant: "example",
          title: "Example",
          body: "If you’re next to a truck’s trailer and can’t see the driver’s mirror, you may be invisible to them.",
        },
      ],
    },

    {
      id: "passing-basics",
      title: "Passing safely",
      summary: "Passing is a time-exposed risk — minimize time in the danger zone.",
      learnMore: [
        "Before passing, check ahead for enough clear road and check behind for faster vehicles.",
        "Pass with a clear speed advantage; avoid passing if it would require others to brake.",
        "Return to your lane only when you can see the passed vehicle clearly (in your mirror) and you won’t cut them off.",
      ],
      callouts: [
        {
          variant: "common-mistake",
          title: "Common mistake",
          body: "Passing without a plan for where you’ll merge back in.",
        },
      ],
    },

    {
      id: "merging",
      title: "Merging and lane drops",
      summary: "Blend smoothly; don’t force braking.",
      learnMore: [
        "Adjust speed early to match traffic flow and merge into a safe gap.",
        "Signal early and avoid sudden last-second merges.",
        "In heavy traffic, merging works best when drivers cooperate — but you still must ensure the gap is safe.",
      ],
    },

    {
      id: "multi-lane-same-lane-rule",
      title: "When two vehicles try to enter the same lane",
      summary: "Handbook rule: if both enter the same lane at once, the vehicle from the right yields to the one from the left.",
      learnMore: [
        "This shows up when lanes merge, during lane drops, or when two entry paths converge.",
        "Even if you have “priority,” avoid side-by-side merges — create space and merge one at a time.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "Your goal is a smooth zipper-like merge, not winning a position.",
        },
      ],
    },
  ],

  commonMistakes: [
    "Signaling and moving immediately (no time for others to react).",
    "Skipping the blind spot check.",
    "Cutting off the vehicle you just passed.",
    "Last-second swerves to avoid a missed exit/turn.",
    "Staying beside trucks in blind spots.",
  ],
};
