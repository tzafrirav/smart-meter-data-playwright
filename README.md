# Playwright & Cloudbeat Example

A Playwright project for testing the Sauce Demo website, with adjusted reporting for Cloudbeat

## Setup
1. Clone or download this project.
2. Navigate to the project directory: `cd cb-playwright`
3. Run `npm i` to install dependencies.

## Cloudbeat Reporter
At playwright.config.ts update: 

```
reporter: process.env.CB_AGENT ? '@cloudbeat/playwright' : 'html'
```

## Running Tests
- Run all tests: `npx playwright test --headed`
- Run a specific test class: `npx playwright login.spec.ts --project=chromium`