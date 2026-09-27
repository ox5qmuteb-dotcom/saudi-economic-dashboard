# saudi-economic-dashboard

Economic dashboard with Arabic-first bilingual UI (Arabic/English toggle) for:

1. Highest cost-of-living countries (explicit metric, not ambiguous wording)
2. Countries with the largest Muslim populations
3. A neutral, chronological historical timeline of major wars/conflicts from the 7th century to the present

## Setup

```bash
npm install
npm run lint
npm test
npm run build
npm start
```

Then open `http://localhost:3000`.

## Data modules and metrics

All dashboard datasets are defined in `/home/runner/work/saudi-economic-dashboard/saudi-economic-dashboard/src/data.js` with metadata labels, year, and source strings.

- **Cost of living ranking**
  - Metric: `Cost of Living Plus Rent Index (Numbeo, New York = 100)`
  - Year shown in UI: `2025`
  - Source label shown in UI: `Numbeo Cost of Living Index by Country 2025`

- **Muslim population ranking**
  - Metric: `Estimated Muslim Population (millions)`
  - Year shown in UI: `2024`
  - Source label shown in UI: `Pew Research / national census compilations (latest available estimates)`

- **Historical timeline**
  - Starts in the 7th century and continues to the latest currently included event.
  - Includes explicit date(s), region, parties (where historically well-established), and note fields.

## Historical neutrality and uncertainty disclaimer

The timeline is intentionally selective and non-exhaustive. Historical classification choices, exact dates, party naming, and casualty estimates can vary by source, and ongoing conflicts can change as new reporting appears.

## Accessibility and localization

- Semantic sections/articles/tables with captions
- Keyboard-accessible language toggle button
- Responsive card layout
- Localized number/date formatting for Arabic (`ar-SA`) and English (`en-US`)
