export function Size (value, minValue = -Infinity, maxValue = Infinity) {
  if (isNaN(value)) return minValue
  return Math.min(Math.max(value, minValue), maxValue)
}

export function Scope (value, minValue = -Infinity, maxValue = Infinity) {
  return minValue <= value && value <= maxValue
}

export function PropItem (type, value, required, validator) {
  return {type, default: value, required, validator}
}

export function GetType (value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase()
}

export function HasType (value, types) {
  return GetType(value) === types.toLocaleLowerCase()
}

export function HasEmpty (value) {
  switch (GetType(value)) {
    case 'number':
      return isNaN(value)
    case 'array':
      return value.length === 0
    case 'object':
      return Object.assign(value).length === 0
    default:
      return !value
  }
}