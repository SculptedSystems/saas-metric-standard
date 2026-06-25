// canonical-pull.js — freeze + verify the canonical-definition sources.
//
// For each entry in canonical-definitions.json (SaaS Metrics Standards Board +
// origin-author definitions), this fetches the source page, commits a text
// snapshot (durability against link rot), records a content hash and retrieval
// date, and verifies that the entry's verify_phrase still appears verbatim in
// the page. A page that dies, moves, or is silently edited is FLAGGED rather
// than trusted -- the same auditability discipline as the SEC layer, applied to
// the single-canonical-source layers.
//
// Run: node canonical-pull.js   (needs network egress to the source domains)
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const DIR = __dirname;
const SNAP_DIR = path.join(DIR, "snapshots");
const UA = process.env.SEC_UA || "SculptedSystems research contact@sculptedsystems.com";
const SLEEP = (ms) => new Promise((r) => setTimeout(r, ms));
fs.mkdirSync(SNAP_DIR, { recursive: true });

async function getText(url, tries = 4) {
  for (let attempt = 1; ; attempt++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": UA, "Accept": "text/html, */*", "Accept-Language": "en-US,en;q=0.9" } });
      if (r.status === 429 || r.status >= 500) throw new Error("status " + r.status);
      if (!r.ok) throw Object.assign(new Error("status " + r.status), { fatal: true });
      return await r.text();
    } catch (e) {
      if (e.fatal || attempt >= tries) throw e;
      await SLEEP(800 * attempt);
    }
  }
}
function htmlToText(h) {
  return h
    .replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => { try { return String.fromCodePoint(parseInt(n, 16)); } catch { return " "; } })
    .replace(/&#(\d+);/g, (_, n) => { try { return String.fromCodePoint(Number(n)); } catch { return " "; } })
    .replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"')
    .replace(/&rsquo;|&lsquo;/gi, "'").replace(/&ldquo;|&rdquo;/gi, '"').replace(/&mdash;|&ndash;/gi, "-")
    .replace(/&[a-z]+;/gi, " ").replace(/\s+/g, " ").trim();
}
// same folding as the SEC quote verifier: tolerate punctuation/whitespace drift, not fabrication
function norm(s) {
  return (s || "").replace(/[‘’‚‛]/g, "'").replace(/[“”„‟]/g, '"').replace(/[–—−]/g, "-").replace(/\s+/g, " ").trim().toLowerCase();
}
const slug = (m, a) => (a + "-" + m).toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "");

async function main() {
  const src = JSON.parse(fs.readFileSync(path.join(DIR, "canonical-definitions.json"), "utf8"));
  if (!src || !Array.isArray(src.definitions)) throw new Error("canonical-definitions.json malformed: definitions[] missing");
  const today = new Date().toISOString().slice(0, 10);
  const out = [];
  let ok = 0, phraseMiss = 0, fetchErr = 0;
  for (const d of src.definitions) {
    const rec = { metric: d.metric, authority: d.authority, coiner: d.coiner || null, source_url: d.source_url, definition: d.definition, retrieved_date: today };
    try {
      const html = await getText(d.source_url);
      const text = htmlToText(html);
      const snapFile = slug(d.metric, d.authority) + ".txt";
      fs.writeFileSync(path.join(SNAP_DIR, snapFile), text);
      rec.snapshot_file = "snapshots/" + snapFile;
      rec.content_sha256 = crypto.createHash("sha256").update(text).digest("hex");
      rec.verify_phrase = d.verify_phrase;
      rec.verify_phrase_found = norm(text).includes(norm(d.verify_phrase));
      if (rec.verify_phrase_found) ok++; else { phraseMiss++; rec.WARNING = "verify_phrase not found in current page: source may have moved or been edited; re-check the definition."; }
      console.log(`${rec.verify_phrase_found ? "OK  " : "MISS"} ${d.authority.padEnd(15)} ${d.metric} -> ${snapFile}`);
    } catch (e) {
      fetchErr++;
      rec.fetch_error = e.message;
      rec.WARNING = "source unreachable; snapshot not captured. Archive manually (e.g. web.archive.org) for durability.";
      console.log(`ERR  ${d.authority.padEnd(15)} ${d.metric}: ${e.message}`);
    }
    out.push(rec);
    await SLEEP(400);
  }
  fs.writeFileSync(path.join(DIR, "canonical-verified.json"), JSON.stringify({ generated: today, sourceCount: out.length, verified: ok, phraseMismatch: phraseMiss, unreachable: fetchErr, definitions: out }, null, 2));
  console.log(`DONE. ${out.length} sources | verified ${ok} | phrase-mismatch ${phraseMiss} | unreachable ${fetchErr} -> canonical-verified.json`);
  if (phraseMiss || fetchErr) console.log("Review WARNINGs in canonical-verified.json: those definitions are not currently confirmed against a live source.");
}
main();
