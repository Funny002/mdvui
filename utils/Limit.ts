export function Size (value: number, minValue = -Infinity, maxValue = Infinity): number {
  if (isNaN(value)) return minValue
  return Math.min(Math.max(value, minValue), maxValue)
}

export function Scope (value: number, minValue = -Infinity, maxValue = Infinity): boolean {
  return minValue <= value && value <= maxValue
}