// lock.mts -- version + content-hash the conventions library. (TypeScript, ESM.)
//
// Produces conventions-lock.json: a content hash per metric convention plus one
// library hash, stamped with VERSION. This is what makes a citation resolvable:
// "metric-conventions <id> v<version>" maps to a file + a content_sha256 at that
// version, and a consumer (e.g. the gap-report colophon) can stamp a real version
// and hash instead of a placeholder. Same auditability discipline the evidence
// layer applies to its sources (canonical-verified.json), applied to the library's
// own per-metric conventions.
//
// Deterministic: no timestamp, so re-running on unchanged content yields an
// identical lock (git records when it changed).
//
// Run: npm run lock   (or: node --experimental-strip-types definitions/lock.mts)
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

interface ConventionEntry {
  id: string;
  metric: string;
  file: string;
  content_sha256: string;
}

const DEFS = fileURLToPath(new URL(".", import.meta.url)); // definitions/
const CONV = join(DEFS, "conventions");
const sha256 = (s: string): string => createHash("sha256").update(s, "utf8").digest("hex");

const VERSION = readFileSync(join(DEFS, "VERSION"), "utf8").trim();

// The per-metric convention files. Exclude the schema, the readme, and the
// cross-cutting docs that are not a single metric's convention.
const NOT_METRICS = new Set(["_schema.md", "README.md", "classic-errors.md"]);
const metricFiles = readdirSync(CONV)
  .filter((f) => f.endsWith(".md") && !NOT_METRICS.has(f))
  .sort();

const entries: ConventionEntry[] = metricFiles.map((f) => {
  const raw = readFileSync(join(CONV, f), "utf8");
  const name = raw.match(/^metric:\s*(.+)$/m)?.[1]?.trim();
  return {
    id: f.replace(/\.md$/, ""), // the citation id, e.g. "arr"
    metric: name ?? f.replace(/\.md$/, ""),
    file: `conventions/${f}`,
    content_sha256: sha256(raw),
  };
});

// The divergence cheatsheet carries the operational formulas, so it is part of
// the versioned library and gets hashed too.
const CHEAT = join(DEFS, "divergence", "cheatsheet.md");
if (existsSync(CHEAT)) {
  entries.push({
    id: "cheatsheet",
    metric: "Divergence cheatsheet",
    file: "divergence/cheatsheet.md",
    content_sha256: sha256(readFileSync(CHEAT, "utf8")),
  });
}

// One library hash binds the version to every entry's hash: it changes iff the
// version or any convention changes.
const library_sha256 = sha256(
  VERSION + "\n" + entries.map((e) => `${e.id}:${e.content_sha256}`).join("\n"),
);

const lock = { version: VERSION, library_sha256, count: entries.length, conventions: entries };
writeFileSync(join(DEFS, "conventions-lock.json"), JSON.stringify(lock, null, 2) + "\n");
console.log(`conventions-lock: v${VERSION}  library ${library_sha256.slice(0, 7)}  ${entries.length} entries`);
