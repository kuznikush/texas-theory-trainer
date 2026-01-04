import type { TheoryImage, TheoryTopic } from "../types";

export const theoryImageManifest: Record<string, TheoryImage> = {
  stopSign: {
    id: "stopSign",
    localPath: "/img/signs/stop-sign.svg",
    title: "Stop sign",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stop_sign.svg",
    licenseAttribution: "Public domain",
  },
  yieldSign: {
    id: "yieldSign",
    localPath: "/img/signs/yield-sign.svg",
    title: "Yield sign",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Yield_sign.svg",
    licenseAttribution: "Public domain",
  },
  speedLimit45: {
    id: "speedLimit45",
    localPath: "/img/signs/speed-limit-45.svg",
    title: "Speed limit 45",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:US_road_sign_R2-1_45.svg",
    licenseAttribution: "Public domain",
  },
  railroadCrossing: {
    id: "railroadCrossing",
    localPath: "/img/signs/railroad-crossing.svg",
    title: "Railroad crossing",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:US_road_sign_W10-1.svg",
    licenseAttribution: "Public domain",
  },
  schoolCrossing: {
    id: "schoolCrossing",
    localPath: "/img/signs/school-crossing.svg",
    title: "School crossing",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:US_road_sign_S1-1.svg",
    licenseAttribution: "Public domain",
  },
  roadWork: {
    id: "roadWork",
    localPath: "/img/signs/road-work-ahead.svg",
    title: "Road work ahead",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:US_road_sign_W20-1.svg",
    licenseAttribution: "Public domain",
  },
  noPassingZone: {
    id: "noPassingZone",
    localPath: "/img/signs/no-passing-zone.svg",
    title: "No passing zone",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:US_road_sign_W14-3.svg",
    licenseAttribution: "Public domain",
  },
  doNotEnter: {
    id: "doNotEnter",
    localPath: "/img/signs/do-not-enter.svg",
    title: "Do not enter",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:US_road_sign_R5-1.svg",
    licenseAttribution: "Public domain",
  },
  moveOver: {
    id: "moveOver",
    localPath: "/img/signs/move-over-slow-down.svg",
    title: "Move over or slow down",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:TX_Road_Sign_Move_Over_or_Slow_Down.svg",
    licenseAttribution: "Public domain",
  },
};

export const theoryTopics: TheoryTopic[] = [
  {
    slug: "right-of-way",
    title: "Right-of-way",
    emoji: "🛑",
    intro:
      "Understand who goes first at intersections, crosswalks, and when special vehicles are present.",
    tldr: [
      "Yield to pedestrians in crosswalks and to traffic already in the intersection.",
      "At uncontrolled intersections, yield to the vehicle on your right.",
      "Always yield to emergency vehicles using lights or sirens and to school buses with stop arms.",
    ],
    sections: [
      {
        id: "row-intersections",
        heading: "Intersections & stop control",
        summary: "First to stop goes first, otherwise yield to the right.",
        details: [
          "At a two-way stop, stop completely, check for pedestrians, then yield to cross traffic.",
          "At an all-way stop, the first vehicle to stop has the right-of-way. If two arrive together, the driver on the left yields to the driver on the right.",
        ],
        bullets: [
          "Never wave another driver through when you are legally required to yield.",
          "If you cannot see, inch forward slowly only after a full stop.",
        ],
        images: ["stopSign", "yieldSign"],
        callouts: [
          {
            type: "remember",
            title: "",
            text: "Green means you may go, but you must still yield to anyone already in the intersection or crossing legally.",
          },
        ],
      },
      {
        id: "row-special",
        heading: "Pedestrians, school buses, and emergency vehicles",
        summary: "Some road users always get priority.",
        details: [
          "Pedestrians using marked or unmarked crosswalks have the right-of-way when they are in or entering your lane.",
          "Stop for a school bus with flashing red lights and an extended stop arm. Remain stopped until the lights stop and the arm is retracted.",
          "When an emergency vehicle approaches with lights or siren, safely pull to the right and stop until it passes.",
        ],
        callouts: [
          {
            type: "penalty",
            title: "",
            text: "Failing to stop for a school bus can lead to fines and points. Treat it as a serious safety violation.",
          },
        ],
      },
      {
        id: "row-turns",
        heading: "Turns, driveways, and merging",
        summary: "Yield when entering a roadway or crossing lanes.",
        details: [
          "When turning left, yield to oncoming traffic and to pedestrians in the crosswalk.",
          "Drivers entering from alleys, driveways, or private roads must yield to all roadway traffic and pedestrians.",
          "When merging, adjust speed to blend into traffic without forcing others to brake.",
        ],
        bullets: [
          "Never turn left across multiple lanes unless you can clear the entire path.",
          "Use turn signals early so others can predict your move.",
        ],
      },
    ],
    commonMistakes: [
      "Rolling through stop signs instead of making a full stop.",
      "Assuming a green light guarantees the intersection is clear.",
      "Blocking crosswalks while waiting to turn.",
    ],
  },
  {
    slug: "signs-signals",
    title: "Signs & signals",
    emoji: "🚦",
    intro: "Recognize sign shapes, colors, and signal meanings quickly and confidently.",
    tldr: [
      "Red = stop/prohibit, yellow = warn, orange = work zones, green = guidance.",
      "Traffic signals control right-of-way even when a sign is present.",
      "Railroad crossings and school zones require extra caution and full stops when directed.",
    ],
    sections: [
      {
        id: "signals",
        heading: "Traffic signals & lane control",
        summary: "Signals tell you when to stop, go, and yield within your lane.",
        details: [
          "A steady red means stop at the limit line. You may turn right after stopping unless a sign prohibits it or traffic/pedestrians make it unsafe.",
          "A yellow warns the light is about to change. If you can stop safely, do so; if not, clear the intersection.",
          "Lane control signals (like green arrows or red Xs) apply to specific lanes and can override general traffic flow.",
        ],
        images: ["doNotEnter"],
      },
      {
        id: "shapes-colors",
        heading: "Sign shapes & colors",
        summary: "Shape and color tell you the message before you read the words.",
        details: [
          "Octagon = stop. Triangle = yield. Round signs warn of railroad crossings ahead.",
          "White rectangular signs give rules or speed limits. Green is for direction and distance. Blue/white is for services.",
        ],
        bullets: [
          "Yellow signs warn of hazards or changes ahead.",
          "Orange signs mean construction or maintenance with possible workers present.",
        ],
        images: ["stopSign", "yieldSign", "speedLimit45"],
      },
      {
        id: "rail-school",
        heading: "Railroad and school zone signs",
        summary: "Be prepared to stop and look both ways.",
        details: [
          "Railroad crossings require you to slow, look both directions, and cross only when it is clear and signals are not active.",
          "School zone signs and flashing beacons mean reduced speed and extra watchfulness for children crossing.",
        ],
        images: ["railroadCrossing", "schoolCrossing"],
        callouts: [
          {
            type: "remember",
            title: "",
            text: "Never stop on tracks. Make sure you have room on the far side before you cross.",
          },
        ],
      },
    ],
  },
  {
    slug: "speed-space",
    title: "Speed & space",
    emoji: "📏",
    intro: "Choose safe speeds and keep enough space to stop in time.",
    tldr: [
      "Speed limits are maximums, not always safe for the conditions.",
      "Use a following distance of at least 3–4 seconds, more in bad weather.",
      "Your stopping distance grows quickly as speed increases.",
    ],
    sections: [
      {
        id: "following-distance",
        heading: "Following distance & stopping",
        summary: "Space buys you reaction time.",
        details: [
          "Pick a fixed object and count the seconds between the vehicle ahead passing it and you passing it. Aim for 3–4 seconds in normal conditions.",
          "Increase the gap at night, in rain, or when following a large truck that blocks your view.",
          "Stopping distance includes perception time, reaction time, and braking distance — all of which grow as speed rises.",
        ],
        callouts: [
          {
            type: "example",
            title: "",
            text: "If you’re at highway speed in rain, double your following time so you can brake smoothly without skidding.",
          },
        ],
      },
      {
        id: "speed-choice",
        heading: "Choosing the right speed",
        summary: "Match speed to conditions, not just the number on the sign.",
        details: [
          "Slow down for curves, hills, heavy traffic, or limited visibility. You must be able to stop within the distance you can see.",
          "In school zones or work zones, reduced speed limits are enforced and workers may be nearby.",
        ],
        images: ["speedLimit45", "roadWork"],
      },
      {
        id: "space-sharing",
        heading: "Space with large vehicles",
        summary: "Big vehicles need more room to stop and turn.",
        details: [
          "Avoid lingering in a truck’s blind spots. If you can’t see the driver’s mirrors, they can’t see you.",
          "Give wide turns room: trucks swing wide to clear curbs, especially on right turns.",
        ],
      },
    ],
    commonMistakes: [
      "Tailgating, especially in rain or at night.",
      "Driving the posted limit even when visibility is limited.",
    ],
  },
  {
    slug: "lane-changes-passing",
    title: "Lane changes & passing",
    emoji: "↔️",
    intro: "Change lanes safely and pass only when it is legal and clear.",
    tldr: [
      "Check mirrors, signal, and check blind spots before moving.",
      "Pass only when you can see enough distance and it is permitted by signs/markings.",
      "Return to your lane only when you can see the passed vehicle in your mirror.",
    ],
    sections: [
      {
        id: "blind-spots",
        heading: "Mirrors, signals, and blind spots",
        summary: "A quick shoulder check prevents collisions.",
        details: [
          "Before changing lanes, check your rearview, side mirrors, and quickly glance over your shoulder to clear blind spots.",
          "Signal early to give other drivers time to adjust. Keep the signal on through the lane change.",
        ],
      },
      {
        id: "passing-rules",
        heading: "Passing rules",
        summary: "Only pass where signs and pavement markings allow it.",
        details: [
          "Do not pass when there is a solid yellow line on your side or when a no-passing sign is posted.",
          "Never pass in intersections, on hills, or near curves where you cannot see oncoming traffic.",
        ],
        images: ["noPassingZone"],
        callouts: [
          {
            type: "remember",
            title: "",
            text: "If you cannot see far enough ahead to safely complete the pass, wait.",
          },
        ],
      },
      {
        id: "multi-lane",
        heading: "Multi-lane road etiquette",
        summary: "Use the left lane for passing and keep right when not passing.",
        details: [
          "On freeways, faster traffic typically uses the left lanes. Move back right after passing.",
          "Allow space for merging traffic and avoid abrupt lane changes across multiple lanes.",
        ],
      },
    ],
    commonMistakes: [
      "Changing lanes without a signal or without checking blind spots.",
      "Passing on the right when it is not permitted or safe.",
    ],
  },
  {
    slug: "special-situations",
    title: "Special situations",
    emoji: "🌧️",
    intro: "Prepare for work zones, weather, and other higher-risk situations.",
    tldr: [
      "Slow down and stay alert in work zones and around emergency responders.",
      "Never drive through flooded roads; turn around instead.",
      "Motorcycles and bicycles are smaller — give them extra space.",
    ],
    sections: [
      {
        id: "work-zones",
        heading: "Work zones and first responders",
        summary: "Expect sudden stops, lane shifts, and workers close to traffic.",
        details: [
          "Obey posted work-zone speeds and follow flaggers or temporary signals.",
          "When approaching a stopped emergency vehicle with flashing lights, move over a lane if safe or slow down significantly.",
        ],
        images: ["roadWork", "moveOver"],
        callouts: [
          {
            type: "penalty",
            title: "",
            text: "Fines can be doubled in work zones and for failing to move over for emergency vehicles.",
          },
        ],
      },
      {
        id: "weather",
        heading: "Weather and visibility",
        summary: "Your speed and space should change with conditions.",
        details: [
          "In rain, reduce speed and avoid standing water. Hydroplaning risk increases as speed rises.",
          "At night, use low beams when required and drive at a speed that lets you stop within your headlights.",
        ],
      },
      {
        id: "rail-motorcycles",
        heading: "Rail crossings, motorcycles, and bikes",
        summary: "Small vehicles need space and stability.",
        details: [
          "Slow before railroad tracks and cross at a 90-degree angle when possible.",
          "Give motorcycles a full lane — they can change position within their lane to avoid hazards.",
          "Pass cyclists with extra clearance and only when the lane is truly clear.",
        ],
        images: ["railroadCrossing"],
      },
    ],
  },
  {
    slug: "rules-penalties",
    title: "Rules & penalties",
    emoji: "⚖️",
    intro: "Know the rules that protect your license and your record.",
    tldr: [
      "Carry a valid license, insurance, and follow seat belt laws at all times.",
      "Texting while driving is illegal in many situations and always dangerous.",
      "Serious violations like DUI or driving without a license can lead to suspension or arrest.",
    ],
    sections: [
      {
        id: "documents",
        heading: "License, insurance, and vehicle rules",
        summary: "Keep your documents current and your vehicle legal.",
        details: [
          "You must carry your driver license and proof of insurance and present them when requested by law enforcement.",
          "Vehicle equipment rules (lights, brakes, tires) exist to keep your car safe and roadworthy.",
        ],
      },
      {
        id: "violations",
        heading: "Common violations",
        summary: "Small choices can still carry fines or points.",
        details: [
          "Seat belts are required for drivers and passengers. Children must be in the correct safety seat.",
          "Texting or using a handheld phone while driving reduces reaction time. Use hands-free or pull over.",
        ],
        callouts: [
          {
            type: "mistake",
            title: "",
            text: "A quick glance at a phone can be treated as distracted driving and may result in a citation.",
          },
        ],
      },
      {
        id: "serious",
        heading: "Serious offenses and penalties",
        summary: "High-risk violations can suspend your license or lead to arrest.",
        details: [
          "Driving while intoxicated (DWI/DUI) carries severe penalties, including arrest, fines, and license suspension.",
          "Driving without a valid license or while it is suspended can lead to additional charges and vehicle impoundment.",
        ],
        bullets: [
          "Work-zone and school-zone violations often carry higher fines.",
          "Repeat offenses can lead to higher penalties and longer suspensions.",
        ],
      },
    ],
    commonMistakes: [
      "Assuming minor violations won’t affect your license status.",
      "Driving without updated insurance or registration documents.",
    ],
  },
];
