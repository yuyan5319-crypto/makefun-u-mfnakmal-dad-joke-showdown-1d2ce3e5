// Dad Joke Showdown — one original dad joke, written to be told out loud.
//
// The joke: a dad, a fridge, and a pair of googly eyes. The pun is
// "coolest" — the fridge is literally the coolest thing in the kitchen,
// and Dad knows it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I stuck googly eyes on the fridge so it can see food for what it really " +
  "is. My wife asked why. I said, 'Because it's the coolest thing in this kitchen.'";

// The gate only accepts 1–200 characters of real text, so refuse to
// write anything that would fail it instead of shipping a bad entry.
const trimmed = joke.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${trimmed.length}`);
}

// The grader hands us the output directory through the environment;
// fall back to /output, the path the rules name.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed, "utf8");

// Say it out loud, too: a dad joke is meant to be heard.
console.log(trimmed);
