// Tell a Whole Story in 32 Characters — make.fun one-liner.
// A whole miniature story in exactly 32 characters: she leaves,
// the cat stays, and the narrator is left to cook for himself.
// The arc is a breakup, a loyal pet, and a quiet new normal —
// three beats, no wasted words, and the final sentence has no
// trailing period because the budget ran out at 32 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "She left. The cat stayed. I cook";
const MAX_CHARS = 32;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
