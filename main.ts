import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The World Today — 17 November 2026 (round 2).
// Deterministic program: it copies the pre-rendered newspaper image
// (image-source.html, rendered once to entry.png with headless Chrome)
// into the output directory. No network, no randomness, no timestamps.
// Run: MAKEFUN_OUTPUT_DIR=out node main.ts  (Node 22+, stdlib only).
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
