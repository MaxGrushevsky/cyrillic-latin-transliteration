# cyrillic-latin-transliteration

Transliterate between Cyrillic and Latin scripts.

## Install

```bash
npm install cyrillic-latin-transliteration
```

## Usage

```ts
import { toLatin, toCyrillic } from 'cyrillic-latin-transliteration'

toLatin('Привет мир')  // 'Privet mir'
toCyrillic('Privet')   // 'Привет'
```

## API

- **`toLatin(cyrillic: string): string`** — Cyrillic → Latin.
- **`toCyrillic(latin: string): string`** — Latin → Cyrillic.

## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
