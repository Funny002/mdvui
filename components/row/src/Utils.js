import {GetType, HasEmpty, Scope} from '../../Utils'

export default (span, label, state = true) => {
  const classes = [state ? `mdui-${label}` : '']
  if (!HasEmpty(span)) {
    const type = GetType(span)
    if (type === 'number') {
      classes.push(`mdui-${label}-xs-${span}`)
    } else if (type === 'object') {
      Object.assign(span).forEach(keys => {
        const num = span[keys] || 0
        if (Scope(num, 1, 12)) {
          classes.push(`mdui-${label}-${keys}-${num}`)
        }
      })
    }
  }
  return classes.join(' ')
}