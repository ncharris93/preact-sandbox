# `create-preact`

<h2 align="center">
  <img height="256" width="256" src="./src/assets/preact.svg">
</h2>

<h3 align="center">Get started using Preact and Vite!</h3>

## Getting Started

### Docker

- `npm run dev` - serves a docker container with the development server on
  running on localhost:5173
- `npm run build:web` - builds a docker container with production code.
  - outputs to `./build` (can be modified in `./scripts/build.sh`)

### Native ( Be sure to serve the app first )

- `npm run ios` - runs an iOS simulator pointing to a running server instance
- `npm run android` - runs an Android simulator pointing to a running server
  instance

## Original Vite Commands

- `npm run OG:dev` - Starts a dev server at http://localhost:5173/
- `npm run OG:preview` - Starts a server at http://localhost:4173/ to test
  production build locally

## Other

- `npm run build` - Builds for production, emitting to `dist/`
  - utilized in `Dockerfile` for building the app
- `npm run sync` - syncs files to native apps
