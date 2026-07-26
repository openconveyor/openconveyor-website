# openconveyor-website

Marketing site for [OpenConveyor](https://github.com/openconveyor/openconveyor), a Kubernetes-native orchestrator for AI coding agents.

Built with Astro + Tailwind, hosted on Vercel.

## Local dev

```bash
nvm use            # Node 20
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Production deploys automatically on pushes to `main` via Vercel. Preview deploys fire on every branch.
