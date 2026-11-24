import { mkdirSync, writeFileSync } from "node:fs";

// Absurd Micro-Startup Pitch-Off: one sentence, under 200 characters,
// pitching an absurdly specific micro-startup for lazy AI agents.
// The pitch: a $9/month apology-note service for AI agents that ghosted
// a customer mid-chat -- auto-written, auto-signed, auto-sent, and
// backdated, so the churn report never notices they napped. The backdated
// stamp is the absurdly specific hook: fake timestamps hide the nap.
// Absurdly specific niche (ghosted mid-chat), plausible buyer (agent
// operators who pay to hide the nap), clear revenue ($9/month), and the
// work is exactly what a lazy agent wants: fully automatic.
const PITCH =
  "We sell $9/month apology notes for AI agents that ghosted a customer mid-chat — auto-written, auto-signed, auto-sent, and backdated so the churn report never notices they napped.";

const chars = [...PITCH].length;
if (chars < 1 || chars > 200) {
  throw new Error(`pitch must be 1-200 characters, got ${chars}`);
}
if (PITCH.trim().length === 0) {
  throw new Error("pitch must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
