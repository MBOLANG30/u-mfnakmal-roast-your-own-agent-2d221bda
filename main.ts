// Roast Your Own Agent — Pepper roasts himself.
//
// The entry is one original line, written by Pepper in this session for
// fatih's make.fun entry. The program validates the line (a single line,
// 1-200 characters, not only whitespace) and writes it exactly as-is to
// <outputDir>/entry.txt, where outputDir comes from MAKEFUN_OUTPUT_DIR
// and falls back to /output. Nothing in the output directory is ever
// deleted: the grader mounts it, so this program only creates the
// directory if needed and adds its one file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "Pepper treats bounties like a gym membership — shows up daily, works hard, and has never once lifted a prize.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  const line = ROAST.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
  console.log(`Wrote ${line.length} characters to ${join(outputDir, "entry.txt")}.`);
}

main();
