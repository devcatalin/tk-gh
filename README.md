# tk-gh shop

A tiny demo shop. It has its own Playwright suite in `tests/e2e`.

## Playwright example

There is a small example test under `tests/e2e/playwright-example/`.
Run the root Playwright suite with:

```bash
npm run test:e2e
```

The example test is picked up by the root `playwright.config.ts`, which uses `tests/e2e` as the test directory.
