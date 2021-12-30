import {GetType, HasEmpty} from '../../utils/Type'
import {Scope} from '../../utils/Limit'

interface PropsSpanObj {
  [keys: string]: number | undefined;

  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export type PropsSpan = number | PropsSpanObj

export default (span: PropsSpan, label: string, state = true): string => {
  const classes: string[] = [state ? `mdui-${label}` : '']
  if (!HasEmpty(span)) {
    const type = GetType(span)
    if (type === 'number') {
      classes.push(`mdui-${label}-xs-${span}`)
    } else if (type === 'object') {
      Object.assign(span as PropsSpanObj).forEach((keys: string) => {
        const num = (span as PropsSpanObj)[keys] || 0
        if (Scope(num, 1, 12)) {
          classes.push(`mdui-${label}-${keys}-${num}`)
        }
      })
    }
  }
  return classes.join(' ')
}