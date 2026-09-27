import test from "node:test";
import assert from "node:assert/strict";

import { COST_OF_LIVING, CONFLICT_TIMELINE } from "../src/data.js";
import { topRanked, chronologicalTimeline } from "../src/transform.js";
import { renderTimelineItems } from "../src/ui.js";

test("topRanked sorts descending and keeps limit", () => {
  const ranked = topRanked(COST_OF_LIVING.countries, 3);
  assert.equal(ranked.length, 3);
  assert.deepEqual(
    ranked.map((entry) => entry.countryEn),
    ["Bermuda", "Switzerland", "Iceland"]
  );
});

test("chronologicalTimeline is ordered from oldest to newest", () => {
  const timeline = chronologicalTimeline(CONFLICT_TIMELINE.events);
  assert.equal(timeline[0].titleEn, "Battle of Badr");
  assert.equal(timeline.at(-1).titleEn, "Gaza War (2023–present)");
});

test("renderTimelineItems contains localized titles and regions", () => {
  const timeline = chronologicalTimeline(CONFLICT_TIMELINE.events).slice(0, 1);
  const renderedAr = renderTimelineItems(timeline, "ar-SA", "ar");
  const renderedEn = renderTimelineItems(timeline, "en-US", "en");

  assert.match(renderedAr, /غزوة بدر/);
  assert.match(renderedAr, /الحجاز/);
  assert.match(renderedEn, /Battle of Badr/);
  assert.match(renderedEn, /Hejaz/);
});
