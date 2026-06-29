#!/usr/bin/env bash
# Pre-publish verification (repo issue #2). Runs the automatable checks; the
# live citation re-verify (canonical-pull.js against live sources) and the
# git-history scrub stay as manual steps in the pre-publish checklist below.
# Repeatable: run `npm run verify-publish` from the repo root.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1
fail=0
note() { printf "  %s\n" "$1"; }

echo "1. Lock integrity (VERSION + conventions-lock.json match content)"
node --experimental-strip-types definitions/lock.mts >/dev/null 2>&1
if git diff --quiet definitions/conventions-lock.json definitions/VERSION; then note "ok"; else
  note "FAIL: lock out of date; re-run the lock and commit"; fail=1; fi

echo "2. No deferred or unfilled citations"
if grep -rIl "DEFERRED" definitions/ >/dev/null 2>&1; then note "FAIL: DEFERRED markers present"; fail=1; else note "ok"; fi

echo "3. No em or en dashes in authored content"
if grep -rIlP '[\x{2013}\x{2014}]' definitions/conventions definitions/divergence README.md VERSIONING.md CONTRIBUTING.md 2>/dev/null | grep -q .; then
  note "FAIL: em or en dash in authored content"; fail=1; else note "ok"; fi

echo "4. No broken cross-repo decision links"
if grep -rIn "\.\./\.\./\.\./\.\./decisions" definitions/ >/dev/null 2>&1; then note "FAIL: broken cross-repo DR link"; fail=1; else note "ok"; fi

echo
if [ $fail -eq 0 ]; then echo "verify-publish: PASS (automatable checks)"; else echo "verify-publish: FAIL"; fi
echo
echo "Manual pre-publish steps (not automated here):"
echo "  - Live citation re-verify: run definitions/evidence/canonical-pull.js against the live"
echo "    primary sources; confirm each verbatim quote still appears and snapshots are fresh."
echo "  - Git-history scrub: confirm no archived private pipeline paths appear in git log --all."
exit $fail
