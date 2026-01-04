import type { TheoryTopic } from "./types";

export const rightOfWayTopic: TheoryTopic = {
  slug: "right-of-way",
  title: "Right-of-way",
  icon: "🛑",
  intro:
    "Learn who goes first at intersections, crosswalks, and in special situations — using rules from the Texas Driver Handbook.",
  whatYouWillLearn:
    "A practical set of rules you can apply in seconds: who yields, who proceeds, and how to stay safe when other drivers don’t follow the rules.",
  decisionRules: [
    "Safety first: if someone is taking it, let them — right-of-way is given, not taken.",
    "Follow control devices and officers: signals/signs and law enforcement directions override everything else.",
    "Yield to vulnerable/priority road users: pedestrians legally crossing, trains, school buses (when required), and emergency vehicles.",
    "At intersections: vehicle already in the intersection generally goes first; otherwise apply stop/yield/uncontrolled rules.",
    "Turning left (and many U-turns): you usually yield to oncoming traffic and pedestrians crossing your path.",
    "Entering from non-roadway (driveway/private road/alley): you stop and yield to roadway traffic + pedestrians.",
  ],
  tldr: [
    "Right-of-way is **given, not taken** — don’t insist if it’s not safe.",
    "Obey signs/signals; if an officer directs traffic, **the officer wins**.",
    "At an **uncontrolled intersection**, yield to the vehicle on your **right**.",
    "At a **4-way stop**, the **first to stop goes first**; if tied, yield to the **right**.",
    "When **turning left**, yield to **oncoming traffic** and **pedestrians** in your path.",
    "From a **driveway/private road/alley**, stop before the sidewalk and yield to all traffic and pedestrians.",
    "At a **T-intersection**, traffic on the through road has priority — the road that ends must yield.",
    "At railroad crossings: **stop when required**, never stop on tracks, and remember **trains always have the right-of-way**.",
    "Approaching a stopped emergency vehicle with lights: **move over** if possible; otherwise **slow down** as required.",
    "For school buses with flashing red lights/stop arm: **stop** and don’t pass until it’s safe/legal to proceed.",
  ],
  sections: [
    {
      id: "core-mindset",
      title: "The core mindset",
      summary: "Right-of-way is a rule system — but safety overrides ego.",
      learnMore: [
        "Texas emphasizes that right-of-way is something you **give**, not something you **take**. Even if you’re legally correct, a collision is still a collision.",
        "Use the rules to predict what *should* happen, then double-check that it *is* happening before you commit (especially at stops, merges, and left turns).",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "Being “right” doesn’t protect you. Proceed only when you see others are yielding.",
        },
      ],
    },

    {
      id: "controlled-intersections",
      title: "Intersections controlled by signs or signals",
      summary: "If there’s a sign or signal, it decides who yields — then you still check it’s clear.",
      learnMore: [
        "At controlled intersections, you must obey traffic signals and signs. If a law enforcement officer is directing traffic, follow their instructions even if it contradicts a sign/signal.",
        "Even with a green light, you should watch for vehicles or pedestrians already in the intersection and for drivers running late reds.",
      ],
      bullets: [
        "Red means stop before the crosswalk/intersection; turns may be allowed only when legal and after yielding.",
        "Green means you may proceed **if it is safe**; you still yield to anyone lawfully in the intersection/crosswalk.",
        "Green arrow means you can go in that direction **after yielding** to conflicting vehicles/pedestrians.",
      ],
      callouts: [
        {
          variant: "common-mistake",
          title: "Common mistake",
          body: "Treating a green as a guarantee. Green = permission, not protection.",
        },
      ],
    },

    {
      id: "uncontrolled-intersections",
      title: "Uncontrolled intersections",
      summary: "No signs/signals? Yield to the vehicle on your right — and don’t assume they know it.",
      learnMore: [
        "At an intersection with no traffic control devices, you yield to any vehicle that has entered or is approaching from your **right**.",
        "If the road to your right is clear, or vehicles are far enough away for you to cross safely, you may proceed — but confirm the other driver is actually yielding.",
      ],
      callouts: [
        {
          variant: "example",
          title: "Example",
          body: "You and another car arrive at the same time with no signs. If the other car is on your right, you yield.",
        },
      ],
    },

    {
      id: "stop-control",
      title: "Stop control (2-way stop & 4-way stop)",
      summary: "Full stop, then go in the correct order — ties yield to the right.",
      learnMore: [
        "At a two-way stop, you stop completely and yield to cross traffic and pedestrians before entering.",
        "At an all-way stop, the first vehicle to stop has the right-of-way. If two arrive at the same time, the driver on the left yields to the driver on the right.",
        "If you can’t see due to parked cars/foliage, inch forward slowly **only after** a complete stop and only if it’s safe.",
      ],
      bullets: [
        "Stop behind the limit line/crosswalk if present; otherwise stop before entering the intersection area.",
        "Scan left-right-left and check crosswalks.",
        "Proceed only when you’re confident others are yielding.",
      ],
      images: [
        {
          src: "/signs/stop.svg",
          alt: "Stop sign",
          caption: "STOP sign",
          sourceLabel: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Stop_sign.svg",
          license: "Public domain",
        },
        {
          src: "/signs/yield.svg",
          alt: "Yield sign",
          caption: "YIELD sign",
          sourceLabel: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Yield_sign.svg",
          license: "Public domain",
        },
      ],
      callouts: [
        {
          variant: "common-mistake",
          title: "Common mistake",
          body: "Rolling through stops. A ‘California stop’ increases failure-to-yield crashes — and it’s easy to test in exams.",
        },
        {
          variant: "remember",
          title: "Remember",
          body: "Never wave someone through when you’re legally required to yield — you can create confusion and a crash.",
        },
      ],
    },

    {
      id: "left-turns",
      title: "Turning left (and many U-turn situations)",
      summary: "Left turns are a classic fail point: yield to oncoming traffic and pedestrians crossing your path.",
      learnMore: [
        "When turning left, you must yield to any vehicle coming straight through from the opposite direction.",
        "On a green light, you may turn left when safe — but you still yield to oncoming traffic before turning.",
        "Also check for pedestrians in the crosswalk you’re turning across (even if you have a green).",
      ],
      bullets: [
        "If you enter the intersection to prepare for a left turn, turn only when there is a safe gap.",
        "Don’t rely on another driver’s “polite” stop — confirm the whole path is clear.",
      ],
      callouts: [
        {
          variant: "example",
          title: "Example",
          body: "You have green and want to turn left. An oncoming car is going straight: they have the right-of-way; you wait.",
        },
      ],
    },

    {
      id: "driveways-private-roads",
      title: "Driveways, alleys, and private roads",
      summary: "Entering a roadway from a non-roadway: stop and yield to everyone already on the road and sidewalk.",
      learnMore: [
        "When entering or crossing a road, street, or highway from a private road, alley, building, or driveway, you must stop prior to the sidewalk and yield the right-of-way to all approaching vehicles and pedestrians.",
        "This includes backing out — if you can, back in when parking so you can pull out forward with better visibility.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "If you’re ‘joining’ traffic, you’re the one who yields — not the vehicles already on the road.",
        },
      ],
    },

    {
      id: "t-intersections",
      title: "T-intersections",
      summary: "The road that ends yields to the through road.",
      learnMore: [
        "At a T-intersection, if you’re on the street that ends at the intersection, you must stop and yield to vehicles on the through street.",
        "Don’t assume the through road will stop unless you see a stop/yield for them.",
      ],
    },

    {
      id: "frontage-roads",
      title: "Frontage roads & controlled-access highways",
      summary: "On frontage roads, yield to vehicles entering from or leaving to the highway (as described in the handbook).",
      learnMore: [
        "When driving on the frontage road of a controlled-access highway, you must yield to vehicles entering the frontage road from the highway and to vehicles leaving the frontage road to enter the highway.",
        "Expect fast lane changes and late merges here — leave extra space and avoid sudden acceleration into gaps.",
      ],
      callouts: [
        {
          variant: "common-mistake",
          title: "Common mistake",
          body: "Treating frontage-road entries like normal city merges. Speeds, angles, and visibility can be worse — be patient and predictable.",
        },
      ],
    },

    {
      id: "multi-lane-merge-rule",
      title: "Multiple-lane entry rule (same lane conflict)",
      summary: "When two vehicles try to enter the same lane, the one entering from the right yields to the one from the left (handbook rule).",
      learnMore: [
        "On roads with three or more lanes moving in the same direction, if two vehicles attempt to enter the same lane at the same time, the vehicle entering from the **right** must yield to the vehicle entering from the **left**.",
        "This shows up in situations like lane drops, on-ramps into multi-lane segments, and when two lanes merge into one.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "Avoid ‘merge races’. Signal early, match speed, and merge smoothly without forcing braking.",
        },
      ],
    },

    {
      id: "railroad-crossings",
      title: "Railroad crossings",
      summary: "Stop when required, never stop on tracks, and remember trains always have the right-of-way.",
      learnMore: [
        "You are required to stop at a railroad grade crossing when indicated and remain stopped until it is safe/allowed to proceed.",
        "If lights are flashing or gates are down, you stop and remain stopped until the train passes and signals stop / gates rise.",
        "Look both ways and listen; there may be multiple tracks and a second train can be hidden by the first.",
        "Never stop on the tracks. If your vehicle stalls, get out and move away from the tracks; seek help and keep yourself safe.",
        "Key idea from the handbook: trains do not and cannot stop quickly — trains always have the right-of-way.",
      ],
      callouts: [
        {
          variant: "penalty",
          title: "Penalty",
          body: "Failing to obey railroad crossing laws can result in a fine (the handbook notes a range).",
        },
      ],
    },

    {
      id: "emergency-vehicles-move-over",
      title: "Emergency vehicles & the Move Over / Slow Down rule",
      summary: "When approaching a stopped emergency vehicle with lights activated: move over if possible; otherwise slow down as required.",
      learnMore: [
        "If you approach a stopped emergency vehicle with lights activated, you must vacate the lane closest to it when the road has two or more lanes in that direction.",
        "If you cannot move over safely, you must slow down: the handbook describes slowing to not more than 20 mph below the limit when the limit is 25 mph or more, or to less than 5 mph when the limit is under 25 mph.",
        "Signal early, check mirrors/blind spots, and don’t slam on brakes — the goal is a predictable, safe lane change or controlled slow-down.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "‘Move over’ only if it’s safe. If not, slow down significantly and pass with extreme caution.",
        },
      ],
    },

    {
      id: "school-buses",
      title: "School buses",
      summary: "If a school bus is displaying alternating flashing red lights (and stop arm), you stop and do not pass until permitted.",
      learnMore: [
        "You must yield the right-of-way to school buses and drive with extra care near them.",
        "If you approach a school bus from either direction and it is displaying alternating flashing red lights, you must stop and you may not pass until the bus resumes motion, you are signaled by the driver, or the signals/stop arm indicate it’s legal to proceed.",
        "Treat this as a high-stakes rule: kids can enter the roadway unexpectedly.",
      ],
      callouts: [
        {
          variant: "penalty",
          title: "Penalty",
          body: "School-bus violations can lead to serious consequences (fines/points). Treat it as a major safety rule.",
        },
      ],
    },
  ],
  commonMistakes: [
    "Rolling through stop signs instead of making a full stop.",
    "Assuming a green light means the intersection is clear.",
    "Waving other drivers through when you are legally required to yield (creates confusion).",
    "Turning left across multiple lanes without confirming every lane is clear.",
    "Entering from a driveway/alley and ‘forcing’ traffic to brake.",
    "Passing an emergency vehicle too fast or failing to move over when safe.",
    "Stopping on railroad tracks or not checking for a second train.",
  ],
};
