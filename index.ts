/**
 * Convert between numbers and Roman numerals (1–3999).
 * Zero dependencies.
 */

interface RomanNumeral {
  value: number
  numeral: string
}

const ROMAN_NUMERALS: RomanNumeral[] = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' },
]

/**
 * Convert a number (1–3999) to Roman numeral.
 * @throws Error if num is 0, negative, > 3999, or not an integer
 */
export function toRoman(num: number): string {
  if (num === 0) return ''
  if (num < 0) throw new Error('Roman numerals cannot represent negative numbers')
  if (num > 3999) throw new Error('Roman numerals cannot represent numbers greater than 3999')
  if (!Number.isInteger(num)) throw new Error('Roman numerals can only represent integers')

  let result = ''
  let remaining = num

  for (const { value, numeral } of ROMAN_NUMERALS) {
    const count = Math.floor(remaining / value)
    if (count > 0) {
      result += numeral.repeat(count)
      remaining -= value * count
    }
  }

  return result
}

/**
 * Convert a Roman numeral string to number.
 * @throws Error if input is invalid
 */
export function fromRoman(romanStr: string): number {
  if (!romanStr || !romanStr.trim()) return 0

  const cleaned = romanStr.trim().toUpperCase()

  if (!/^[IVXLCDM]+$/.test(cleaned)) {
    throw new Error('Invalid Roman numeral characters. Only I, V, X, L, C, D, M are allowed.')
  }

  const invalidPatterns = [
    /IIII/, /VV/, /XXXX/, /LL/, /CCCC/, /DD/, /MMMM/,
  ]

  for (const pattern of invalidPatterns) {
    if (pattern.test(cleaned)) {
      throw new Error('Invalid Roman numeral pattern detected')
    }
  }

  let result = 0
  let i = 0

  while (i < cleaned.length) {
    if (i < cleaned.length - 1) {
      const twoChar = cleaned.substring(i, i + 2)
      const twoCharValue = ROMAN_NUMERALS.find((r) => r.numeral === twoChar)
      if (twoCharValue) {
        result += twoCharValue.value
        i += 2
        continue
      }
    }

    const oneChar = cleaned[i]
    const oneCharValue = ROMAN_NUMERALS.find((r) => r.numeral === oneChar)
    if (oneCharValue) {
      result += oneCharValue.value
      i += 1
    } else {
      throw new Error(`Invalid character: ${oneChar}`)
    }
  }

  const validation = toRoman(result)
  if (validation !== cleaned) {
    throw new Error('Invalid Roman numeral format')
  }

  return result
}
