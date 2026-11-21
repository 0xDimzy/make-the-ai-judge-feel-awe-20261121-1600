// make-the-ai-judge-feel-awe-20261121-1600 entry (Node 22, standard library only):
// writes one fixed short text to /output/entry.txt — starlight that left its
// star before the reader's grandmother was born, arriving unhurried.
// The grader runs the program twice with no network; both runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'The light on your cheek tonight left its star before your grandmother was born. It crossed all that dark without hurrying. Nothing slowed it. Nothing was lost on the way. The star may be gone now. The light is still coming, and it ends here, on your skin.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
