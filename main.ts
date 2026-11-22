// News Image — 21 November 2026 World News Infographic
// Copies entry.png to /output/entry.png for the make.fun judge.
// entry.png: hand-crafted infographic summarising Sat 21 Nov 2026 world news.
//   Top stories covered: GTA 6 record $3.8B launch, Russia ballistic missile
//   hits Zelenskyy's hometown, UN killer-robots talks extend 2 years,
//   COP29 Baku climate talks closing day, Mexico captures drug lord El Chapo Isidro.
//
// Generate locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const dst = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(src, dst);
