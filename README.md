# GitHub Finder

A GitHub user search application built with React, TypeScript, Vite, and Tailwind CSS.

![GitHub Finder](https://user-images.githubusercontent.com/76653403/213014905-42676c5c-aa87-46d4-bdd6-7010301f0440.png)

[Live demo](https://githubfinder-apps.netlify.app/)

## Features

- Search for a GitHub username with the search button or the Enter key.
- Display the user's avatar, username, location when available, and follower/following counts.
- Show an error message when GitHub returns a `404` response.

## Run locally

Install Node.js and npm, then run:

```sh
git clone https://github.com/dogukancaner/github-finder.git
cd github-finder
npm ci
npm run dev
```

Open the local URL printed by Vite in your terminal.

The app calls the public GitHub users API directly from the browser. The current implementation does not require an API token or an environment file.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Run the TypeScript compiler and create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally after running `npm run build`. |

## Project structure

- `src/main.tsx`: application entry point and route configuration.
- `src/pages/Home.tsx`: GitHub API request and user/error state.
- `src/components/Search.tsx`: username input and search controls.
- `src/components/User.tsx`: user profile card.
- `src/types/user.ts`: profile data types.

## Current limitations

- The profile card includes a “Repo Listesi” link, but the repository list route is not implemented in the current router.
- Requests are unauthenticated and are subject to GitHub's API rate limits.
- Network failures and API errors other than `404` do not yet have dedicated handling.
