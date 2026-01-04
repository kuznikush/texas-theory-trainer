import type { TheoryTopic } from "./types";

export const signsSignalsTopic: TheoryTopic = {
  slug: "signs-signals",
  title: "Signs & signals",
  icon: "🚦",
  intro:
    "Learn the meaning of traffic signals, sign shapes/colors, and road markings — fast enough to use under pressure.",
  whatYouWillLearn:
    "How to read signals and signs at a glance, plus the common tricky cases that show up on tests and in real driving.",

  decisionRules: [
    "An officer directing traffic overrides signs/signals.",
    "Traffic signals + lane control signals set right-of-way, but you still verify the intersection is clear.",
    "Sign shape + color tells you the *category* (warning, regulatory, guide) even before you read the words.",
    "Road markings (lines/arrows) are rules too — treat them like signs painted on the road.",
    "In work zones, obey temporary signs/flaggers first.",
  ],

  tldr: [
    "Red = stop. Green = you may go **if clear**. Yellow = prepare to stop (don’t accelerate to “beat it”).",
    "A green arrow allows movement in the arrow direction, but still yield to pedestrians/blocked intersection.",
    "STOP is an octagon; YIELD is a downward triangle — you should recognize them instantly.",
    "Regulatory signs tell you what you must/must not do; warning signs alert you to hazards/changes ahead.",
    "Work zone signs and flaggers are not suggestions — violations can be fined, and fines can double when workers are present (handbook).",
    "Pavement markings: solid lines are more restrictive than broken lines; arrows show permitted direction/turn lanes.",
  ],

  sections: [
    {
      id: "traffic-lights",
      title: "Traffic lights (basic meaning)",
      summary: "Signals assign turns, but you still check for pedestrians and red-light runners.",
      learnMore: [
        "Traffic signals control the flow of traffic at intersections. Even when you have a green, you must yield to pedestrians legally crossing and vehicles already in the intersection.",
        "Yellow is a warning that the signal is changing. The safe habit is: if you can stop smoothly, stop.",
        "Red means stop at the limit line/crosswalk; proceed only when permitted (e.g., on green) and after yielding as required.",
      ],
      callouts: [
        {
          variant: "common-mistake",
          title: "Common mistake",
          body: "Accelerating at yellow. Many crashes happen when one driver ‘squeezes through’ and the other starts early.",
        },
      ],
    },

    {
      id: "turn-arrows",
      title: "Green arrows and protected turns",
      summary: "An arrow gives you priority in that direction, but it doesn’t make you invincible.",
      learnMore: [
        "A green arrow usually indicates a protected movement (like a protected left). You may proceed in the arrow direction when safe.",
        "Still scan crosswalks: pedestrians may have a walk phase that conflicts, or they may still be finishing crossing.",
        "Never enter an intersection you can’t clear (don’t block the box).",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "Arrow = permission. You still yield to pedestrians and avoid blocking the intersection.",
        },
      ],
    },

    {
      id: "sign-shapes-colors",
      title: "Sign shapes & colors",
      summary: "Shape + color gives meaning even before you can read the text.",
      learnMore: [
        "Recognizing shapes is important at night, in rain, or when a sign is partly hidden.",
        "Regulatory signs tell you what you must do (stop, yield, speed limits, lane use, do not enter).",
        "Warning signs alert you to hazards or changes ahead (curves, merges, intersections, pedestrian areas).",
        "Guide signs provide navigation info (routes, exits, destinations).",
      ],
      bullets: [
        "STOP = octagon.",
        "YIELD = downward-pointing triangle.",
        "Most warning signs = diamond shape.",
        "Many regulatory signs = rectangle (rules/limits).",
      ],
      images: [
        {
          src: "/signs/stop.svg",
          alt: "Stop sign",
          caption: "STOP sign (shape recognition)",
          sourceLabel: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/",
          license: "Public domain or per file",
        },
        {
          src: "/signs/yield.svg",
          alt: "Yield sign",
          caption: "YIELD sign (shape recognition)",
          sourceLabel: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/",
          license: "Public domain or per file",
        },
      ],
    },

    {
      id: "pavement-markings",
      title: "Pavement markings & lane arrows",
      summary: "Lines and arrows are ‘signs on the road’ — they control passing, turning, and lane use.",
      learnMore: [
        "Broken lines generally indicate you may cross when safe (e.g., lane changes).",
        "Solid lines are more restrictive — treat them as a strong ‘do not cross’ unless a rule explicitly allows it.",
        "Turn arrows tell you where the lane is going; don’t treat a turn-only lane as a ‘maybe.’",
        "Stop lines and crosswalk markings tell you where to stop for signals/stop signs and where pedestrians cross.",
      ],
      callouts: [
        {
          variant: "example",
          title: "Example",
          body: "If your lane has a left-turn-only arrow, don’t go straight from that lane — it surprises other drivers and can cause a crash.",
        },
      ],
    },

    {
      id: "work-zone-signals",
      title: "Work zones, flaggers, and temporary control",
      summary: "Temporary rules override normal rules — and penalties can be higher.",
      learnMore: [
        "Work zones use warning signs, barricades, cones, and sometimes flaggers or temporary signals to guide traffic safely.",
        "The handbook notes it is a violation to disobey warning signs/barricades or drive around a barricade, and fines can double in a construction/maintenance zone when workers are present.",
        "If water covers any portion of the road and a barricade/sign is placed, driving around it can be a more serious offense (handbook details include potential jail time).",
      ],
      callouts: [
        {
          variant: "penalty",
          title: "Penalty focus",
          body: "Work zone + barricade violations are explicitly called out in the handbook. Treat barricades as ‘road is closed.’",
        },
      ],
    },
  ],

  commonMistakes: [
    "Treating green as ‘go no matter what’ instead of ‘go if clear.’",
    "Speeding up at yellow instead of deciding early.",
    "Missing shape recognition (STOP/YIELD) when visibility is poor.",
    "Ignoring lane arrows and last-second swerving to ‘make’ a turn.",
    "Driving around cones/barricades in work zones.",
  ],
};
