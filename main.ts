import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies the pre-drawn front page (entry.png) to the output directory.
// No network, no model calls, fully deterministic: the same bytes every run.
const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(dir, "entry.png"), join(outDir, "entry.png"));
