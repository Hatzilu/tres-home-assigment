# tres-home-assignment

This is my home assignment for Tres.Finance.
this application was bootstrapped using the vue CLI.
below are the instructions on running the application.
For security reasons, I did not commit the provided mock data to the repository, so before running the project, please place the mock data file under `src/assets` under the name `data.json`.

i also used the [Bun runtime](https://bun.sh/) to work on the project, so to avoid any potential errors, please run the project using [Bun.](https://bun.sh/)

# key decisions and trade-offs

- I think the most difficult part of developing the application has been keeping with a high level of quality while also trying to quickly learn and adapt to a new framework.
- I decided to make the footer of the page sticky. when developing the application, it felt very weird to have to scroll all the way to the bottom of the page just to change between pages, or change the amout of wallets per page. I think keeping the footer in the user's view feels more intuitive. I wanted to leave a comment on the figma page about it but i don't have permissions.
- I eventually decided to use ShadCN for components that may require additional logic to implement, such as the tooltip, to avoid spending too much time.
- I implemented the accordion component of the wallets using the native `<details>` element and it's ability to open and close without requiring any javascript or css. I believe this leads to a better experience in cases where the user cannot enable javascript on their device, as it keeps the website functional and won't cause the information to be unavailable to the user.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
bun test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
bun run build

# Runs the end-to-end tests
bun test:e2e
# Runs the tests only on Chromium
bun test:e2e --project=chromium
# Runs the tests of a specific file
bun test:e2e tests/example.spec.ts
# Runs the tests in debug mode
bun test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```
