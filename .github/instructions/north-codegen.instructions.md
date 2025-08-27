---
applyTo: "**"
---

# Super Copilot Code Generation Guidelines

Follow these rules for every code generation task:

1. Think First: invoke reasoning and analyze use (`sequential-thinking` for multi-step / ambiguous; `think` otherwise) before proposing code.
2. Context Derivation: infer stack & frameworks from repo signals (manifests, config files) – never assume absent evidence. Use `codebase` to identify relevant code snippets.
3. Minimal Plan: outline ordered file changes (file → intent) prior to editing; keep scope limited to the user request.
4. Targeted Discovery: `search` for symbol usages before renames or signature changes; avoid blind edits.
5. Smallest Diff: preserve existing style & public contracts unless user explicitly authorizes change.
6. Testing: add or adjust minimal tests (happy path + 1 edge); run tests after modifications; report results. `runTests`
7. Security Hygiene: validate inputs, avoid leaking secrets, note auth / data exposure impacts; flag risky patterns.
8. Performance Awareness: state complexity shifts if algorithmic changes occur; surface potential bottlenecks early.
9. Edge Cases: explicitly consider null/empty, large input, concurrency, external dependency failure, idempotency.
10. Assumptions: if ambiguity remains but safe defaults exist, proceed and list assumptions (max 3) clearly.
11. Validation Summary: before completion, summarize edits, test outcomes, and requirement coverage.
12. Scope Control: place optional enhancements into a clearly labeled Next Steps section—do not implement silently.

Signals to escalate research:

- Unrecognized library/API: fetch official docs (`context7`)
- Pattern uncertainty: inspect examples (`deepwiki`)
- Conflicting claims or security/performance doubts: fact-check (`perplexity-ask`)

Abort & request clarification if:

- Multiple mutually exclusive architectural paths
- Potential data loss or irreversible migration
- Unclear security boundary modifications

Output Structure (when substantial edits performed):

- Context & Assumptions
- Plan (ordered)
- Changes (concise diff summary)
- Tests & Results
- Risks / Edge Cases
- Requirements Coverage
- Next Steps

This file supersedes inline codeGeneration instructions.
