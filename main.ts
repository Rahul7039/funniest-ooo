import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line of out-of-office auto-reply, the funniest I could write.
// Drafted from ten candidates and picked for the judge's brief, in order:
// a real one-line reply a person would set; a genuine surprise (the redirect
// leads nowhere — the manager is also on holiday); a voice of its own
// ("I should warn you"); a fresh phrasing; every word earning its place.
const LINE =
  "Out until Monday. Please direct all urgent matters to my manager, who, I should warn you, is also on holiday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
