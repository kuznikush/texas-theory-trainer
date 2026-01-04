import type { TheoryTopic } from "./types";

export const specialSituationsTopic: TheoryTopic = {
  slug: "special-situations",
  title: "Special situations",
  icon: "🌧️",
  intro:
    "Real driving isn’t only dry roads and perfect visibility. Learn how Texas expects you to drive in higher-risk conditions.",
  whatYouWillLearn:
    "How to drive in work zones, around large vehicles, in floods, with distracted drivers, and other situations that require extra caution.",

  decisionRules: [
    "In reduced traction/visibility: slow down early and increase space.",
    "In work zones: obey temporary controls; don’t drive around barricades.",
    "Around trucks/motorcycles/bicycles: increase space and avoid blind spots.",
    "If you’re distracted (or others are): simplify — slow down, create space, and avoid complex maneuvers.",
  ],

  tldr: [
    "Work zones are unpredictable; obey signs/flaggers and expect sudden stops.",
    "Flooded roads are high-risk; barricades mean ‘do not enter.’",
    "Give trucks more space and avoid their blind spots.",
    "Distracted driving is a major crash cause — don’t text; keep your attention on driving.",
  ],

  sections: [
    {
      id: "work-zones",
      title: "Work zones",
      summary: "Expect lane shifts, sudden braking, and workers/equipment close to traffic.",
      learnMore: [
        "Work zones use signs, cones, barricades, and sometimes flaggers/escort vehicles to guide traffic.",
        "Slow down, increase following distance, and watch for abrupt lane changes or narrowed lanes.",
        "Never drive around barricades or ignore warning signs — the handbook explicitly calls this out as an offense.",
      ],
    },

    {
      id: "floods",
      title: "Floods and water-covered roads",
      summary: "If water is over the road, don’t assume it’s safe — and never go around barricades.",
      learnMore: [
        "Water can hide road damage, depth changes, or strong currents.",
        "If a barricade or warning sign blocks a flooded area, treat it as a hard stop — choose another route.",
        "Even shallow water can reduce traction dramatically.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "When in doubt, don’t drive through water. Turning around is the safe choice.",
        },
      ],
    },

    {
      id: "trucks",
      title: "Share the road with trucks",
      summary: "Trucks need space to stop and turn, and they have large blind spots.",
      learnMore: [
        "Stay out of truck blind spots; don’t linger beside trailers.",
        "Give trucks extra following distance — if you can’t see around them, you can’t anticipate hazards.",
        "Be careful when trucks turn: they may swing wide and need more room.",
      ],
    },

    {
      id: "motorcycles",
      title: "Share the road with motorcycles",
      summary: "Motorcycles are harder to see and more affected by road hazards.",
      learnMore: [
        "Look twice at intersections before turning or pulling out.",
        "Give motorcycles more following distance — abrupt braking is more dangerous for them.",
        "Be mindful of uneven pavement, debris, and wet surfaces that affect motorcycles more.",
      ],
    },

    {
      id: "bicycles",
      title: "Share the road with bicycles",
      summary: "Right-of-way rules apply; expect cyclists to be in or near the lane.",
      learnMore: [
        "Bicycles are road users; treat them predictably and give them space.",
        "At intersections, apply right-of-way rules the same way — yield when required.",
        "Be careful when turning right: don’t cut across a bicycle’s path.",
      ],
    },

    {
      id: "distracted-driving",
      title: "Distracted driving & texting",
      summary: "If your attention isn’t on driving, crash risk rises fast — and texting is illegal.",
      learnMore: [
        "The handbook lists many distractions: texting, phone calls, passengers, adjusting controls, eating/drinking, and more.",
        "It is against the law to read, write, or send messages on a cell phone or other portable wireless device; violations are subject to fines (handbook).",
        "Best practice: set everything before moving, keep hands/eyes on the driving task, and pull over safely if you must handle the phone.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "If you need to use the phone: pull off the road safely. Don’t multitask at speed.",
        },
      ],
    },
  ],

  commonMistakes: [
    "Driving through work zones at normal speed with minimal following distance.",
    "Going around barricades near floods/closures.",
    "Lingering beside trucks or cutting in front of them.",
    "Turning right across a cyclist’s path.",
    "Reading a text “just for a second.”",
  ],
};
