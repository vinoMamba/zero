/**
 *
 * @param str
 * @returns
 * @description: 首字母大写
 */

export function toUpperFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function toLowerFirstLetter(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
