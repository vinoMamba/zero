import { it } from 'vitest'
import { toLowerFirstLetter, toUpperFirstLetter } from '../src'

it('toUpperFirstLetter ', (t) => {
  t.expect(toLowerFirstLetter('')).toBe('')
  t.expect(toLowerFirstLetter('1')).toBe('1')
  t.expect(toUpperFirstLetter('vino')).toBe('Vino')
  t.expect(toUpperFirstLetter('Vino')).toBe('Vino')
  t.expect(toUpperFirstLetter('vino wang')).toBe('Vino wang')
  t.expect(toUpperFirstLetter('中文')).toBe('中文')
})

it('toLowerFirstLetter ', (t) => {
  t.expect(toLowerFirstLetter('')).toBe('')
  t.expect(toLowerFirstLetter('vino')).toBe('vino')
  t.expect(toLowerFirstLetter('Vino')).toBe('vino')
  t.expect(toLowerFirstLetter('Vino wang')).toBe('vino wang')
  t.expect(toLowerFirstLetter('中文')).toBe('中文')
})
