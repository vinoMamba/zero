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
