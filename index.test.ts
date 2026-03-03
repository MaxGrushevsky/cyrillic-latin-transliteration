import { describe, it, expect } from 'vitest'
import { toLatin, toCyrillic } from './index'

describe('toLatin', () => {
  it('converts simple phrase', () => {
    expect(toLatin('Привет мир')).toBe('Privet mir')
  })

  it('returns empty string for empty input', () => {
    expect(toLatin('')).toBe('')
  })

  it('passes through non-Cyrillic characters', () => {
    expect(toLatin('123 !')).toBe('123 !')
  })
})

describe('toCyrillic', () => {
  it('converts simple word', () => {
    expect(toCyrillic('Privet')).toBe('Привет')
  })

  it('converts phrase with space', () => {
    expect(toCyrillic('Privet mir')).toBe('Привет мир')
  })

  it('round-trips simple text', () => {
    const text = 'Привет, мир!'
    expect(toCyrillic(toLatin(text))).toBe(text)
  })
})

