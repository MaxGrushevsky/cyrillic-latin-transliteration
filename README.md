# roman-numerals

Convert between numbers and Roman numerals (1–3999). Zero dependencies, TypeScript, ESM.

## Install

```bash
npm install roman-numerals
```

## Usage

```ts
import { toRoman, fromRoman } from 'roman-numerals'

toRoman(42)           // 'XLII'
toRoman(2024)         // 'MMXXIV'
fromRoman('IV')       // 4
fromRoman('MMXXIV')   // 2024
```

## API

- **`toRoman(num: number): string`** — Converts a number (1–3999) to a Roman numeral. Throws on invalid input (zero, negative, &gt; 3999, or non-integer).
- **`fromRoman(romanStr: string): number`** — Converts a Roman numeral string to a number. Case-insensitive; invalid strings throw.

## License

MIT
