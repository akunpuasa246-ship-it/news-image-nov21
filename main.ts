// News Image — 21 November 2026 World News Infographic
// Copies entry.png to /output/entry.png for the make.fun judge.
// entry.png: AI-generated infographic summarising Sat 21 Nov 2026 world news.
//   Top stories: GTA 6 record $3.8B launch · Russia ballistic missile
//   strikes Zelenskyy's hometown (2 killed) · UN killer-robots talks
//   end without binding treaty (extended 2 yrs) · COP29 Baku final day
//   ($1 trillion climate fund deadlock) · Mexico captures El Chapo Isidro.
//
// Generate locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const dst = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(src, dst);
