# Portfolio Website

A personal portfolio built with **Next.js** and **TypeScript**, featuring live GitHub stats — total commit count and repository count — fetched server-side via the GitHub GraphQL API and cached for fast, efficient rendering.

## Features

- ⚡ Built with Next.js (App Router) and TypeScript
- 📊 Live GitHub stats: total commits and repository count, pulled directly from the GitHub GraphQL API
- 🔒 GitHub token stays server-side only — never exposed to the client
- ♻️ Data cached with Next.js ISR (`revalidate`) to avoid hitting GitHub's API on every request
- 🎨 Clean, responsive design
- 📱 Mobile-friendly layout

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **UI:** React
- **Styling:** CSS
- **Data Source:** GitHub GraphQL API

## Getting Started

## GitHub Stats Integration

The `About` section fetches live data from GitHub:

- **Total Commits** — calculated via `contributionsCollection.totalCommitContributions`, summed across every year since the account was created
- **Total Repositories** — calculated via `repositories(ownerAffiliations: OWNER, isFork: false).totalCount`

Data is fetched server-side and revalidated every 24 hours (`export const revalidate = 86400`), so the site stays fast while stats stay reasonably up to date.

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx       # About section with GitHub stats
│   ├── helper/
│   │   └── commitCount.ts # GitHub GraphQL fetch logic
│   └── styles/
│       └── about.css
```

## License

This project is open source and available under the [MIT License](LICENSE).
