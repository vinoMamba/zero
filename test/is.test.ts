import { it } from 'vitest'
import { isEmail, isNumber, isString, isUrl } from '../src'

it('isEmail', (t) => {
  t.expect(isEmail('vino')).toBe(false)
  t.expect(isEmail('vino@')).toBe(false)
  t.expect(isEmail('vino@111')).toBe(false)
  t.expect(isEmail('vino@111.com')).toBe(true)
  t.expect(isEmail('@111.com')).toBe(false)
  t.expect(isEmail('1@111.c')).toBe(true)
})

it('isUrl', (t) => {
  t.expect(isUrl('vino')).toBe(false)
  t.expect(isUrl('http://')).toBe(false)
  t.expect(isUrl('http://vino.com')).toBe(true)
  t.expect(isUrl('https://vino.com')).toBe(true)
  t.expect(isUrl('https://www.vino.com')).toBe(true)
  t.expect(isUrl('https://www.com')).toBe(true)
})

it('isNumber', (t) => {
  t.expect(isNumber('0')).toBe(false)
  t.expect(isNumber(0)).toBe(true)
  t.expect(isNumber(123)).toBe(true)
  t.expect(isNumber(123.123)).toBe(true)
  t.expect(isNumber(-123.123)).toBe(true)
  t.expect(isNumber(Number.NaN)).toBe(false)
  t.expect(isNumber(true)).toBe(false)
  t.expect(isNumber(new Date())).toBe(false)
  t.expect(isNumber(null)).toBe(false)
  t.expect(isNumber(undefined)).toBe(false)
  t.expect(isNumber({})).toBe(false)
  t.expect(isNumber([])).toBe(false)
  t.expect(isNumber(BigInt('1111'))).toBe(false)
  t.expect(isNumber(Symbol('11'))).toBe(false)
})

it('isString', (t) => {
  t.expect(isString('0')).toBe(true)
  t.expect(isString('')).toBe(true)
  t.expect(isString(' ')).toBe(true)
  t.expect(isString(`sss${1}`)).toBe(true)
  t.expect(isString(0)).toBe(false)
  t.expect(isString(Number.NaN)).toBe(false)
  t.expect(isString(true)).toBe(false)
  t.expect(isString(false)).toBe(false)
  t.expect(isString({})).toBe(false)
  t.expect(isString(BigInt('111'))).toBe(false)
  t.expect(isString(null)).toBe(false)
  t.expect(isString(undefined)).toBe(false)
})
