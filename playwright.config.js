import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CB_AGENT ? '@cloudbeat/playwright' : 'html',
  use: {
    trace: "on-first-retry",
    video: "on-first-retry",
    screenshot: "only-on-failure",
    headless: process.env.CB_AGENT ? true : false
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
