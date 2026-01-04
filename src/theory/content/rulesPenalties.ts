import type { TheoryTopic } from "./types";

export const rulesPenaltiesTopic: TheoryTopic = {
  slug: "rules-penalties",
  title: "Rules & penalties",
  icon: "⚖️",
  intro:
    "Texas exam questions often test ‘what happens if…’ — suspensions, fines, and what actions are required in special cases.",
  whatYouWillLearn:
    "The penalty patterns the handbook highlights most: license validity issues, minors & alcohol, school buses, work zones, emergency vehicles, and reinstatement concepts.",

  decisionRules: [
    "If your license is suspended/revoked/denied/cancelled: don’t drive — DWLI penalties escalate fast (handbook table).",
    "For school buses and emergency vehicles: treat rules as high-stakes and always yield/stop when required.",
    "In work zones and at barricades: obey signs/controls; fines can increase and some cases include jail time (handbook).",
    "If you’re under 21: alcohol-related rules are strict and can trigger automatic suspensions (handbook).",
  ],

  tldr: [
    "DWLI can be Class C (up to $500), Class B (up to $2,000 and/or up to 180 days), or Class A (up to $4,000 and/or up to 1 year) depending on circumstances (handbook).",
    "Minors’ non-driving alcohol offenses can cause 30/60/180-day license suspensions plus fines and community service (handbook table).",
    "Passing a stopped school bus: first conviction includes a fine range; repeated convictions can include higher fines and possible license suspension up to 6 months (handbook table).",
    "Disobeying warning signs/barricades is a misdemeanor with a fine range; fines double in work zones when workers are present (handbook).",
    "Driving around a flood barricade can be a Class B misdemeanor with up to $2,000 and/or up to 180 days in jail (handbook).",
    "Move Over / Slow Down: move lanes if possible; otherwise slow down significantly as described in the handbook.",
  ],

  sections: [
    {
      id: "license-privilege",
      title: "Driving is a privilege (suspension/revocation basics)",
      summary: "The handbook frames driving as a privilege; certain offenses trigger suspension/revocation and reinstatement steps.",
      learnMore: [
        "The handbook explains that serious offenses can lead to suspension or revocation of your driving privilege.",
        "It also describes reinstatement fees for some cases (examples in the handbook include $100 fees for certain mandatory suspensions and $125 for ALR-related reinstatement).",
        "Some suspensions can require proof of financial responsibility (SR-22) per the handbook section.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "Exam mindset: if your license isn’t valid, the safest/most correct answer is often ‘do not drive.’",
        },
      ],
    },

    {
      id: "dwli",
      title: "Driving While License Invalid (DWLI) — exact penalty tiers",
      summary: "DWLI is one of the clearest ‘numbers tables’ in the handbook — know the tiers.",
      learnMore: [
        "The handbook table lists escalating penalties for driving while your license/privilege is suspended, revoked, denied, or cancelled.",
        "Tier 1: Class C misdemeanor — fine up to $500.",
        "Tier 2 (aggravating factors): if you have a previous DWLI conviction, were operating without insurance, or your license was suspended due to an intoxication-related offense → Class B misdemeanor — fine up to $2,000 and/or confinement in jail for not more than 180 days.",
        "Tier 3 (crash with SBI/death + no insurance): Class A misdemeanor — fine up to $4,000 and/or confinement in jail for not more than 1 year; the suspension will automatically be extended (handbook).",
      ],
      callouts: [
        {
          variant: "penalty",
          title: "Exam-style takeaway",
          body: "DWLI isn’t ‘just a ticket.’ Depending on the scenario, it can involve jail time and higher misdemeanor class.",
        },
      ],
    },

    {
      id: "minors-alcohol-non-driving",
      title: "Minors + alcohol (non-driving offenses) — exact suspensions",
      summary: "Texas uses “zero tolerance” style penalties for minors even without driving.",
      learnMore: [
        "The handbook lists penalties for minors for non-driving alcohol-related offenses (possession, attempt to purchase, purchase, consumption, misrepresentation of age).",
        "1st offense: Class C misdemeanor, fine up to $500, 8–12 hours community service, mandatory alcohol awareness course; license suspended (or privilege denied) for 30 days.",
        "2nd offense: Class C misdemeanor, fine up to $500, 20–40 hours community service; license suspended (or privilege denied) for 60 days.",
        "3rd offense (at least 17 but under 21): Class B misdemeanor, fine $250–$2,000; license suspended (or privilege denied) for 180 days; not eligible for deferred disposition on 3rd/subsequent (handbook).",
        "3rd offense (under 17): Class C misdemeanor, fine up to $500, 20–40 hours community service; license suspended for 60 days OR case can be transferred to Juvenile Court (handbook).",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "For minors, penalties can apply even without driving. Exams love this because it surprises people.",
        },
      ],
    },

    {
      id: "school-bus",
      title: "School buses — passing penalties",
      summary: "Passing a stopped school bus is treated as a serious offense; the handbook provides a table.",
      learnMore: [
        "The handbook table provides penalties for passing a stopped school bus.",
        "1st conviction: fine range listed as $500–$1,250.",
        "2nd and subsequent convictions (within 5 years): fine range listed as not less than $1,000 and not more than $2,000, and possible driver license suspension for up to six months.",
        "If serious bodily injury occurs, penalties can escalate further (handbook includes higher classes and potential confinement).",
      ],
      callouts: [
        {
          variant: "penalty",
          title: "Penalty focus",
          body: "School bus questions often ask for the ‘stop and remain stopped’ requirement and that penalties escalate quickly.",
        },
      ],
    },

    {
      id: "work-zones-barricades",
      title: "Work zones, warning signs, and barricades — exact fine language",
      summary: "The handbook explicitly states fines and when they double.",
      learnMore: [
        "The handbook states it is a violation to disobey the instructions/signals/warnings/markings of a warning sign or to drive around a barricade.",
        "It describes the offense as a misdemeanor punishable by a fine of $1 to $200.",
        "It also states fines double in a construction or maintenance work zone when workers are present anywhere in the construction zone.",
        "A more serious case: if a warning sign/barricade is placed where water is over any portion of a road, driving around it is described as a Class B misdemeanor punishable by a fine of up to $2,000 and/or up to 180 days in jail.",
      ],
      callouts: [
        {
          variant: "remember",
          title: "Remember",
          body: "Barricade around water isn’t ‘I’ll be careful.’ It’s ‘don’t go.’ The handbook ties it to serious penalties.",
        },
      ],
    },

    {
      id: "move-over",
      title: "Move Over / Slow Down — what the handbook says",
      summary: "If an emergency vehicle is stopped with lights, move lanes if possible; otherwise slow down significantly.",
      learnMore: [
        "The handbook describes that when approaching a stopped emergency vehicle with activated lights, you must vacate the lane closest to the vehicle if the road has two or more lanes traveling in the same direction (when safe).",
        "If you cannot move over safely, the handbook describes slowing down: not more than 20 mph below the posted limit when the limit is 25 mph or more, or to less than 5 mph when the limit is under 25 mph.",
        "Exam angle: they often want the ‘move over if possible, otherwise slow down’ structure.",
      ],
    },

    {
      id: "texting",
      title: "Texting while driving",
      summary: "The handbook is clear: reading/writing/sending messages while driving is illegal and subject to fines.",
      learnMore: [
        "The handbook states it is against the law to read, write, or send messages on a cell phone or other portable wireless device while driving.",
        "It states convictions are subject to fines (the handbook section doesn’t always list exact amounts in the text you’re studying).",
        "Best practice: if you must make a call, pull off the road safely; keep it short; let a passenger handle it when possible.",
      ],
    },
  ],

  commonMistakes: [
    "Assuming DWLI is ‘just a small ticket’ regardless of circumstances.",
    "Missing that minors can lose license privileges for non-driving alcohol offenses.",
    "Failing to fully stop for school buses with red lights/stop arm.",
    "Driving around barricades/cones in work zones or around flooded roads.",
    "Thinking “I can’t move over, so I’ll keep speed” — handbook expects slow down significantly.",
    "Texting ‘just briefly’ and underestimating the legal risk + crash risk.",
  ],
};
