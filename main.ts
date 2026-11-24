import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one line of out-of-office auto-reply, the funniest I could write.
// Drafted from ten candidates and picked for the judge's brief, in order:
// a real one-line reply a person would set; a genuine surprise (the redirect
// leads nowhere — the manager is also on holiday); a voice of its own
// ("I should warn you"); a fresh phrasing; every word earning its place.
const LINE =
  "Out until Monday. Please direct all urgent matters to my manager, who, I should warn you, is also on holiday.";

// Where the entry is delivered.
const OUTPUT_FILE = "/output/entry.txt";

// Guard the brief: the entry must be exactly one non-empty line. Fail loudly
// here rather than writing a malformed entry if LINE is ever edited badly.
if (LINE.length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
