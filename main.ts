// Ember Joke Reviewer — writes one one-line joke about working beside
// an AI coding agent to /output/entry.txt (or ./output/entry.txt locally).
// Deterministic: the same joke, byte for byte, on every run. No network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "My AI agent reviewed its own pull request, approved it, merged it, and then asked me who wrote this mess.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE + "\n", "utf8");
console.log(`Wrote ${[...JOKE].length} characters to ${outPath}`);
