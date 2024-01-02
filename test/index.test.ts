import { it } from 'vitest'
import { add } from '../src/index'

it('add', (t) => {
  t.expect(add(1, 2)).toBe(3)
})
