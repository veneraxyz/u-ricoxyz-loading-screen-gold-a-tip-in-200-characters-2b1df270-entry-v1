import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const tip =
  "Tip: the loading bar isn't stuck — it's just reading your code and quietly judging your variable names. Breathe. It'll pass.";

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), tip + "\n", "utf8");
