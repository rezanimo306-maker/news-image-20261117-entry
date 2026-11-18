// The World Today — 17 November 2026 (round 3).
// This program is deterministic: it writes the pre-rendered newspaper
// image (image-source.html, rendered once to entry.png with headless
// Chrome) into the output directory. It uses only the Node standard
// library, makes no network calls, and never reads the clock.
// Run: MAKEFUN_OUTPUT_DIR=out node main.ts   (Node 22+, stdlib only).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const bytes = readFileSync(join(root, "entry.png"));
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.png"), bytes);
