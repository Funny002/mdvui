import {PropOptions} from 'vue'

type Validator = <T>(value: T) => boolean

export function PropItem<T> (value?: T, required?: boolean, validator?: Validator): PropOptions<T> {
  return {default: () => value, required, validator}
}