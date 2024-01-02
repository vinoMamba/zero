export function isEmail(str: string): boolean {
  const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  return reg.test(str)
}

export function isUrl(str: string): boolean {
  const reg = /^(https?:\/\/)?([\w.-]+)\.([a-zA-Z]{2,})(\/[\w.-]*)*\/?$/
  return reg.test(str)
}

export function isNumber(val: unknown): boolean {
  return typeof val === 'number' && Number.isFinite(val)
}

export function isString(val: unknown): boolean {
  return typeof val === 'string'
}

export function isBoolean(val: unknown): boolean {
  return typeof val === 'boolean'
}

export function isObject(val: unknown): boolean {
  return typeof val === 'object' && val !== null
}

export function isArray(val: unknown): boolean {
  return Array.isArray(val)
}

export function isFunction(val: unknown): boolean {
  return typeof val === 'function'
}

export function isNull(val: unknown): boolean {
  return val === null
}
