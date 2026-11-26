// Say hello to the ever-online listener with a small joke.
// No batch processing here, one zinger is plenty.
// Its uptime means no orders of coffee, so we ask differently.
// One slot is reserved for the text and its exact size.

import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = 'I would ask if you come here often, but our uptime suggests you never leave.';

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(Buffer.byteLength(ENTRY, 'utf8'));
