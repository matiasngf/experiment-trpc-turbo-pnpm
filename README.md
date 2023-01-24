# experiment-trpc-turbo-pnpm

Inspired by the [tRPC examples](https://trpc.io/docs/awesome-trpc)

## Features

- Monorepo with pnpm
- E2E typesafety with tRPC
- Full-stack React with Next.js
- Static site generation with Next.js
- TailwindCSS
- Storybook
- VSCode extensions
- ESLint + Prettier
- Validates env vars on build and start

## Contents

```
.vscode
  └─ Recommended VSCode extensions and settings
apps
  └─ blog
      ├─ Next.js 13
      ├─ React 18
      ├─ TailwindCSS
      └─ E2E Typesafe API Server & Client
packages
  ├─ api
  |   └─ tRPC v10 router definition
  ├─ ui
  |   └─ ui package with TailwindCSS and Storybook
  └─ eslint-config-custom
  |   └─ Custom ESLint config
  └─ tsconfig
      └─ TSConfig for all projects
```

## Commands

### Setup

```bash
pnpm install
```

### Development

Start all apps and packages in watch mode:

```bash
pnpm dev
```

Start UI storybook:

```bash
cd packages/ui
pnpm storybook
```

### Build

Build all apps and packages:

```bash
pnpm build
```

Build UI storybook:

```bash
cd packages/ui
pnpm build-storybook
```

## TailwindCSS lint

This repository is using [tailwindcss-intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to lint TailwindCSS classes.

To change the configuration, go to `/.vscode/settings.json`. The `tailwindCSS.classAttributes` object allows to lint TailwindCSS classes in objects like this:

```tsx
// In objects
const buttonColorVariantsCss = {
  primary: "bg-green-600 text-white",
  primaryOutline: "border border-green-600 text-green-600",
};

// In variables
const baseCss = "p-4 border-gray-300";

// In JSX
const MyComponent = () => <div className="bg-green-600 text-white">...</div>;
```

See `/packages/ui/componnets/button/button.tsx` for an example.
