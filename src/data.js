export const COST_OF_LIVING = {
  metricKey: "numbeo-col-index-plus-rent",
  metricLabel: {
    ar: "مؤشر تكلفة المعيشة + الإيجار (Numbeo، نيويورك = 100)",
    en: "Cost of Living Plus Rent Index (Numbeo, New York = 100)"
  },
  year: 2025,
  source: "Numbeo Cost of Living Index by Country 2025",
  countries: [
    { countryAr: "برمودا", countryEn: "Bermuda", value: 144.1 },
    { countryAr: "سويسرا", countryEn: "Switzerland", value: 119.2 },
    { countryAr: "آيسلندا", countryEn: "Iceland", value: 103.8 },
    { countryAr: "سنغافورة", countryEn: "Singapore", value: 99.4 },
    { countryAr: "النرويج", countryEn: "Norway", value: 95.2 }
  ]
};

export const MUSLIM_POPULATION = {
  metricKey: "muslim-population-estimate",
  metricLabel: {
    ar: "تقدير عدد السكان المسلمين (ملايين)",
    en: "Estimated Muslim Population (millions)"
  },
  year: 2024,
  source: "Pew Research / national census compilations (latest available estimates)",
  countries: [
    { countryAr: "إندونيسيا", countryEn: "Indonesia", value: 242 },
    { countryAr: "باكستان", countryEn: "Pakistan", value: 240 },
    { countryAr: "الهند", countryEn: "India", value: 213 },
    { countryAr: "بنغلاديش", countryEn: "Bangladesh", value: 153 },
    { countryAr: "نيجيريا", countryEn: "Nigeria", value: 111 }
  ]
};

export const CONFLICT_TIMELINE = {
  source: "Academic histories, Encyclopaedia Britannica, Uppsala/PRIO conflict datasets, UN records",
  disclaimer: {
    ar: "ملاحظة: هذا خط زمني انتقائي وغير شامل لكل الحروب. قد تختلف التصنيفات والتواريخ وتقديرات الضحايا حسب المصدر.",
    en: "Note: this is a selective timeline and not an exhaustive list of every war. Classifications, dates, and casualty estimates may vary by source."
  },
  events: [
    {
      startDate: "624-03-13",
      regionAr: "الحجاز",
      regionEn: "Hejaz",
      titleAr: "غزوة بدر",
      titleEn: "Battle of Badr",
      partiesAr: "المسلمون في المدينة مقابل قريش",
      partiesEn: "Medinan Muslims vs Quraysh",
      noteAr: "يُشار إليه كبداية مفصلية في صراعات صدر الإسلام.",
      noteEn: "Often cited as an early turning point in formative Islamic conflicts."
    },
    {
      startDate: "1258-02-10",
      regionAr: "العراق",
      regionEn: "Iraq",
      titleAr: "سقوط بغداد على يد المغول",
      titleEn: "Mongol Sack of Baghdad",
      partiesAr: "الإلخانات المغول ضد الخلافة العباسية",
      partiesEn: "Mongol Ilkhanate vs Abbasid Caliphate",
      noteAr: "تختلف المصادر في أرقام الخسائر البشرية.",
      noteEn: "Casualty estimates vary widely across sources."
    },
    {
      startDate: "1914-07-28",
      endDate: "1918-11-11",
      regionAr: "عالمي",
      regionEn: "Global",
      titleAr: "الحرب العالمية الأولى",
      titleEn: "World War I",
      partiesAr: "قوى الحلفاء وقوى المركز",
      partiesEn: "Allied Powers and Central Powers",
      noteAr: "نطاق عالمي متعدد الجبهات.",
      noteEn: "Global conflict with multiple theaters."
    },
    {
      startDate: "1939-09-01",
      endDate: "1945-09-02",
      regionAr: "عالمي",
      regionEn: "Global",
      titleAr: "الحرب العالمية الثانية",
      titleEn: "World War II",
      partiesAr: "الحلفاء ودول المحور",
      partiesEn: "Allied and Axis powers",
      noteAr: "من أكثر النزاعات دموية في التاريخ الحديث.",
      noteEn: "Among the deadliest conflicts in modern history."
    },
    {
      startDate: "1980-09-22",
      endDate: "1988-08-20",
      regionAr: "الخليج",
      regionEn: "Gulf",
      titleAr: "الحرب العراقية الإيرانية",
      titleEn: "Iran-Iraq War",
      partiesAr: "العراق وإيران",
      partiesEn: "Iraq and Iran",
      noteAr: "تقديرات الخسائر تختلف حسب المصادر الرسمية والبحثية.",
      noteEn: "Loss estimates differ across official and research sources."
    },
    {
      startDate: "2001-10-07",
      endDate: "2021-08-30",
      regionAr: "أفغانستان",
      regionEn: "Afghanistan",
      titleAr: "حرب أفغانستان (بعد 2001)",
      titleEn: "War in Afghanistan (post-2001)",
      partiesAr: "الولايات المتحدة وحلفاؤها، طالبان، وأطراف أخرى",
      partiesEn: "United States and allies, Taliban, and other parties",
      noteAr: "يمتد عبر مراحل عمليات عسكرية وسياسية متعددة.",
      noteEn: "Spans multiple phases of military and political change."
    },
    {
      startDate: "2023-10-07",
      regionAr: "الشرق الأوسط",
      regionEn: "Middle East",
      titleAr: "حرب غزة 2023–الآن",
      titleEn: "Gaza War (2023–present)",
      partiesAr: "إسرائيل وحماس وأطراف أخرى",
      partiesEn: "Israel, Hamas, and other actors",
      noteAr: "النزاع مستمر؛ الأرقام والوقائع تتغير مع التحديثات الميدانية.",
      noteEn: "Conflict remains ongoing; figures and details change as reporting updates."
    }
  ]
};
