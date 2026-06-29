# Contributing

This reference codifies cited authorities. A contribution adds or changes a definition by anchoring it to a codified source, never by inventing one. Read this before opening a change.

## The steward model

Sculpted Systems is the steward. It codifies the cited authorities like a working group maintaining a spec: it records, cites, and reconciles definitions. It does not issue them. A contribution that introduces a definition not traceable to a codified authority is out of scope, however reasonable the definition is.

## Adding or changing a definition

Three tests gate every change.

1. **Membership.** A metric is in scope only if it is **both** raise-critical **and** authority-anchored. Raise-critical: the number materially affects a raise, a sale, or diligence. Authority-anchored: a SaaS Metrics Standards Board codified definition or a named origin author exists to cite. A metric failing either test does not belong here.

2. **Authority discipline.** Cite the codified source. Do not duplicate it, and do not invent one. The canonical definition lives in [`definitions/evidence/`](definitions/evidence/), snapshotted and verified; the convention points to it. A change that restates an authority in the convention's own words, or asserts a formula without a citation, fails review.

3. **Schema.** Every convention follows the fixed schema in [`definitions/conventions/_schema.md`](definitions/conventions/_schema.md): the frontmatter fields, the single H1, and the sections in order. Never assert a contested convention as settled. The prose teaches which axis diverges, measured against the codified convention, not a single settled number.

## The version and lock process

After the content change:

1. Re-run the lock: `npm run lock`. This regenerates each convention's `content_sha256` and the rolled-up `library_sha256` in `conventions-lock.json`.
2. Bump `definitions/VERSION` per the semver policy in [VERSIONING.md](VERSIONING.md): MAJOR for a breaking redefinition, MINOR for an additive change, PATCH for clarifications.
3. Confirm every new or changed definition ships its citation into [`definitions/evidence/`](definitions/evidence/).

CI verifies the committed lock matches the content. A change that edits a convention without re-running the lock fails the build.

## License

Content contributions are accepted under CC BY 4.0; build tooling under MIT. See [LICENSE](LICENSE).
