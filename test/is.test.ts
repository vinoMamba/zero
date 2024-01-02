import { it } from 'vitest'
import { isArray, isBoolean, isEmail, isFunction, isNumber, isObject, isString, isUrl } from '../src'
import { isArray, isBoolean, isEmail, isFunction, isNull, isNumber, isObject, isString, isUrl } from '../src'

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

it('isBoolean', (t) => {
  t.expect(isBoolean(true)).toBe(true)
  t.expect(isBoolean(false)).toBe(true)
  t.expect(isBoolean('0')).toBe(false)
  t.expect(isBoolean(0)).toBe(false)
  t.expect(isBoolean(Number.NaN)).toBe(false)
  t.expect(isBoolean({})).toBe(false)
  t.expect(isBoolean(BigInt('111'))).toBe(false)
  t.expect(isBoolean(null)).toBe(false)
  t.expect(isBoolean(undefined)).toBe(false)
})

it('isObject', (t) => {
  t.expect(isObject({})).toBe(true)
  t.expect(isObject([])).toBe(true)
  t.expect(isObject(new Date())).toBe(true)
  t.expect(isObject(/[a-z]/)).toBe(true)
  t.expect(isObject(false)).toBe(false)
  t.expect(isObject('0')).toBe(false)
  t.expect(isObject(0)).toBe(false)
  t.expect(isObject(Number.NaN)).toBe(false)
  t.expect(isObject(BigInt('111'))).toBe(false)
  t.expect(isObject(null)).toBe(false)
  t.expect(isObject(undefined)).toBe(false)
})

it('isArray', (t) => {
  t.expect(isArray([])).toBe(true)
  t.expect(isArray({})).toBe(false)
  t.expect(isArray(new Date())).toBe(false)
  t.expect(isArray(/[a-z]/)).toBe(false)
  t.expect(isArray(false)).toBe(false)
  t.expect(isArray('0')).toBe(false)
  t.expect(isArray(0)).toBe(false)
  t.expect(isArray(Number.NaN)).toBe(false)
  t.expect(isArray(BigInt('111'))).toBe(false)
  t.expect(isArray(null)).toBe(false)
  t.expect(isArray(undefined)).toBe(false)
})

it('isFunction', (t) => {
  const testFn = async () => {}
  const testFn2 = function () {}
  const testFn3 = () => {}
  const testFn4 = () => new Promise(resolve => resolve(1))
  const testFn5 = () => 1
  t.expect(isFunction(testFn)).toBe(true)
  t.expect(isFunction(testFn2)).toBe(true)
  t.expect(isFunction(testFn3)).toBe(true)
  t.expect(isFunction(testFn4)).toBe(true)
  t.expect(isFunction(testFn5)).toBe(true)

  t.expect(isFunction([])).toBe(false)
  t.expect(isFunction({})).toBe(false)
  t.expect(isFunction(new Date())).toBe(false)
  t.expect(isFunction(/[a-z]/)).toBe(false)
  t.expect(isFunction(false)).toBe(false)
  t.expect(isFunction('0')).toBe(false)
  t.expect(isFunction(0)).toBe(false)
  t.expect(isFunction(Number.NaN)).toBe(false)
  t.expect(isFunction(BigInt('111'))).toBe(false)
  t.expect(isFunction(null)).toBe(false)
  t.expect(isFunction(undefined)).toBe(false)
})

it('isNull', (t) => {
  t.expect(isNull(null)).toBe(true)

  t.expect(isNull([])).toBe(false)
  t.expect(isNull({})).toBe(false)
  t.expect(isNull(new Date())).toBe(false)
  t.expect(isNull(/[a-z]/)).toBe(false)
  t.expect(isNull(false)).toBe(false)
  t.expect(isNull('0')).toBe(false)
  t.expect(isNull(0)).toBe(false)
  t.expect(isNull(Number.NaN)).toBe(false)
  t.expect(isNull(BigInt('111'))).toBe(false)
  t.expect(isNull(undefined)).toBe(false)
})
