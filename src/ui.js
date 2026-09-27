function formatDate(dateString, locale) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(dateString));
}

export function renderRankingRows(rows, locale, lang) {
  const numberFormat = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  return rows
    .map(
      (item, index) =>
        `<tr><td>${index + 1}</td><td>${lang === "ar" ? item.countryAr : item.countryEn}</td><td>${numberFormat.format(item.value)}</td></tr>`
    )
    .join("");
}

export function renderTimelineItems(events, locale, lang) {
  return events
    .map((event) => {
      const period = event.endDate
        ? `${formatDate(event.startDate, locale)} — ${formatDate(event.endDate, locale)}`
        : formatDate(event.startDate, locale);
      return `<li><h3>${lang === "ar" ? event.titleAr : event.titleEn}</h3><p class="meta">${period} | ${
        lang === "ar" ? event.regionAr : event.regionEn
      }</p><p>${lang === "ar" ? event.partiesAr : event.partiesEn}</p><p class="note">${
        lang === "ar" ? event.noteAr : event.noteEn
      }</p></li>`;
    })
    .join("");
}
