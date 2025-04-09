# Playwright & Cloudbeat Example

A Playwright project for testing the Sauce Demo website, with adjusted reporting for Cloudbeat

![Cloudbeat Results](https://github.com/cloudbeat-io/examples-typescript-playwright/blob/main/preview/cloudbeat-results.jpg?raw=true)

## Setup
1. Clone or download this project.
2. Navigate to the project directory: `cd cb-playwright`
3. Run `npm i` to install dependencies.

## Cloudbeat Reporter Integration

This project comes with the CB reporter already integrated. However, if you would like to integrate the CB reporter into a different project, follow these steps:

Add `@cloudbeat/playwright` dependency to your project `npm i @cloudbeat/playwright --save`.

And modify `playwright.config.ts` to use the CB reporter:

```javascript
export default defineConfig({
  ...
  reporter: process.env.CB_AGENT ? '@cloudbeat/playwright' : 'html',
  ...
}
```

 `CB_AGENT` environment variable can be used to determine whether we are running from CB context or not. It is set to `true` on CB execution agents and should **not** be present on developer's machines.

## Running Tests
- Run all tests: `npx playwright test --headed`
- Run a specific test class: `npx playwright login.spec.ts --project=chromium`