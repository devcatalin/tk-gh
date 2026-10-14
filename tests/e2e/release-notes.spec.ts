import {expect, test} from '@playwright/test';
import {existsSync, readFileSync} from 'node:fs';
import {resolve} from 'node:path';

test('repository release notes file exists and is not empty', () => {
  const filePath = resolve(process.cwd(), 'release-notes-2.4.md');

  expect(existsSync(filePath), `Expected file to exist: ${filePath}`).toBe(true);

  const contents = readFileSync(filePath, 'utf8');
  expect(contents.trim().length, `Expected file to have content: ${filePath}`).toBeGreaterThan(0);
});
