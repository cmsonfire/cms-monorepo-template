# @cmsonfire/cms-library-template

Uses:

- Typescript
- pnpm
- tsup
- Changesets 📐

## Created by the following

```sh
pnpm tsc --init
```

## Build & Lint

```json
"scripts": {
        "build": "tsup index.ts --format cjs,esm --dts"
    },
```

```sh
pnpm build
```

```sh
pnpm lint
```

## Changesets (version control)

```sh
pnpm changeset init
```

## Publishing workflow (GitHub Actions)

See `.github/workflows`
