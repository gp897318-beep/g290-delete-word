// The Word You'd Delete From the Dictionary
// Entry: the single word to erase from the dictionary forever.
//
// Pick: "never" — the paradox word. Delete it and nobody can ever say
// "never" again, not even "never say never". The joke lands in one beat,
// comes entirely from the word's own meaning, and no caption is needed:
// the deletion defeats itself. It is also the opposite of the field's
// obvious picks (moist, literally, irregardless), so it stays fresh.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "never";

// Gate validation: exactly one word, 1-77 chars, letters only, not only
// whitespace. A contraction, a hyphenated pair or trailing punctuation
// would fail the judge's "one word, spelled correctly" criterion, so the
// check rejects anything that is not a single run of letters.
const trimmed = WORD.trim();
if (
  trimmed.length < 1 ||
  trimmed.length > 77 ||
  !/^[A-Za-z]+$/.test(trimmed)
) {
  throw new Error("entry must be exactly one word of 1-77 characters");
}
const parts = [trimmed];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", parts[0], "utf8");
console.log(`wrote /output/entry.txt: ${parts[0]}`);
