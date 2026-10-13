import {expect, test} from '@playwright/test';
import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';

test('release notes include Branch selector', async () => {
  const filePath = resolve(process.cwd(), 'release-notes-2.4.md');
  const contents = await readFile(filePath, 'utf8');

  expect(contents).toContain('Branch selector');
});
