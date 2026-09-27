import { CONFLICT_TIMELINE, COST_OF_LIVING, MUSLIM_POPULATION } from "./data.js";
import { topRanked, chronologicalTimeline } from "./transform.js";
import { renderRankingRows, renderTimelineItems } from "./ui.js";

const messages = {
  ar: {
    loading: "جارٍ تحميل البيانات...",
    error: "تعذر تحميل البيانات. حاول مرة أخرى.",
    empty: "لا توجد بيانات متاحة.",
    metric: "المقياس",
    year: "السنة",
    source: "المصدر",
    rank: "الترتيب",
    country: "الدولة",
    value: "القيمة",
    costTitle: "الدول الأعلى تكلفة معيشة",
    muslimTitle: "أكبر عدد من السكان المسلمين",
    timelineTitle: "خط زمني مختصر للحروب والصراعات الكبرى",
    timelineSource: "مصادر تاريخية/بحثية عامة"
  },
  en: {
    loading: "Loading data...",
    error: "Failed to load data. Please try again.",
    empty: "No data available.",
    metric: "Metric",
    year: "Year",
    source: "Source",
    rank: "Rank",
    country: "Country",
    value: "Value",
    costTitle: "Highest Cost-of-Living Countries",
    muslimTitle: "Largest Muslim Population by Country",
    timelineTitle: "Selective Timeline of Major Wars and Conflicts",
    timelineSource: "Public historical/research sources"
  }
};

const state = {
  lang: "ar",
  loading: true,
  error: false,
  datasets: null
};

const app = document.querySelector("#app");
const toggle = document.querySelector("#language-toggle");

function localeOf(lang) {
  return lang === "ar" ? "ar-SA" : "en-US";
}

function render() {
  const t = messages[state.lang];
  const locale = localeOf(state.lang);
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  toggle.textContent = state.lang === "ar" ? "English" : "العربية";
  toggle.setAttribute("aria-pressed", String(state.lang === "en"));

  if (state.loading) {
    app.innerHTML = `<p>${t.loading}</p>`;
    return;
  }

  if (state.error || !state.datasets) {
    app.innerHTML = `<p role="alert">${t.error}</p>`;
    return;
  }

  const costRows = topRanked(state.datasets.cost.countries);
  const muslimRows = topRanked(state.datasets.muslim.countries);
  const timeline = chronologicalTimeline(state.datasets.timeline.events);

  if (!costRows.length || !muslimRows.length || !timeline.length) {
    app.innerHTML = `<p>${t.empty}</p>`;
    return;
  }

  app.innerHTML = `
    <section class="grid" aria-label="${state.lang === "ar" ? "أقسام لوحة المعلومات" : "Dashboard sections"}">
      <article class="card">
        <h2>${t.costTitle}</h2>
        <p class="meta"><strong>${t.metric}:</strong> ${state.datasets.cost.metricLabel[state.lang]}</p>
        <p class="meta"><strong>${t.year}:</strong> ${new Intl.NumberFormat(locale).format(state.datasets.cost.year)}</p>
        <p class="meta"><strong>${t.source}:</strong> ${state.datasets.cost.source}</p>
        <table>
          <caption>${t.costTitle}</caption>
          <thead>
            <tr><th>${t.rank}</th><th>${t.country}</th><th>${t.value}</th></tr>
          </thead>
          <tbody>${renderRankingRows(costRows, locale, state.lang)}</tbody>
        </table>
      </article>

      <article class="card">
        <h2>${t.muslimTitle}</h2>
        <p class="meta"><strong>${t.metric}:</strong> ${state.datasets.muslim.metricLabel[state.lang]}</p>
        <p class="meta"><strong>${t.year}:</strong> ${new Intl.NumberFormat(locale).format(state.datasets.muslim.year)}</p>
        <p class="meta"><strong>${t.source}:</strong> ${state.datasets.muslim.source}</p>
        <table>
          <caption>${t.muslimTitle}</caption>
          <thead>
            <tr><th>${t.rank}</th><th>${t.country}</th><th>${t.value}</th></tr>
          </thead>
          <tbody>${renderRankingRows(muslimRows, locale, state.lang)}</tbody>
        </table>
      </article>
    </section>

    <section class="card" aria-labelledby="timeline-title">
      <h2 id="timeline-title">${t.timelineTitle}</h2>
      <p class="meta"><strong>${t.source}:</strong> ${state.datasets.timeline.source}</p>
      <p class="note">${state.datasets.timeline.disclaimer[state.lang]}</p>
      <ol class="timeline">${renderTimelineItems(timeline, locale, state.lang)}</ol>
    </section>
  `;
}

async function loadData() {
  state.loading = true;
  state.error = false;
  render();
  try {
    await Promise.resolve();
    state.datasets = {
      cost: COST_OF_LIVING,
      muslim: MUSLIM_POPULATION,
      timeline: CONFLICT_TIMELINE
    };
  } catch {
    state.error = true;
  } finally {
    state.loading = false;
    render();
  }
}

toggle.addEventListener("click", () => {
  state.lang = state.lang === "ar" ? "en" : "ar";
  render();
});

loadData();
