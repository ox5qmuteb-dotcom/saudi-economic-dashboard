export function topRanked(countries, limit = 5) {
  return [...countries].sort((a, b) => b.value - a.value).slice(0, limit);
}

export function chronologicalTimeline(events) {
  return [...events].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}
