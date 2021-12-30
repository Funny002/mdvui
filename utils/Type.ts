export function GetType (value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase()
}

export function HasType (value: unknown, types: string): boolean {
  return GetType(value) === types.toLocaleLowerCase()
}

export function HasEmpty (value: unknown): boolean {
  switch (GetType(value)) {
    case 'number':
      return isNaN(<number>value)
    case 'array':
      return (value as unknown[]).length === 0
    case 'object':
      return Object.assign(value as { [key: string]: unknown }).length === 0
    default:
      return !value
  }
}